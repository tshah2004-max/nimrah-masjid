
import fs from "node:fs/promises";
import path from "node:path";

const MAWAQIT_URL =
  "https://mawaqit.net/en/nimrah-masjid-manchester-m19-3aq-united-kingdom";

// Existing JSON file locations
const COMPONENTS_FOLDER = path.join(
  process.cwd(),
  "src",
  "components"
);

const PRAYER_FILE = path.join(
  COMPONENTS_FOLDER,
  "prayerCalendar.json"
);

const IQAMA_FILE = path.join(
  COMPONENTS_FOLDER,
  "iqamaCalendar.json"
);

// Extract Mawaqit's configuration from the webpage
function extractConfData(html) {
  const match = html.match(
    /(?:var|let|const)\s+confData\s*=\s*/
  );

  if (!match) {
    throw new Error("Could not find Mawaqit timetable data.");
  }

  const start = match.index + match[0].length;

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = start; i < html.length; i++) {
    const char = html[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }

      continue;
    }

    if (char === '"') {
      inString = true;
    } else if (char === "{") {
      depth++;
    } else if (char === "}") {
      depth--;

      if (depth === 0) {
        return JSON.parse(html.slice(start, i + 1));
      }
    }
  }

  throw new Error("Could not extract valid Mawaqit data.");
}

// Check that the calendar has the correct structure
function validateCalendar(calendar, expectedLength, name) {
  if (!Array.isArray(calendar) || calendar.length !== 12) {
    throw new Error(
      `${name} must contain all 12 months.`
    );
  }

  for (const month of calendar) {
    if (
      !month ||
      typeof month !== "object" ||
      Array.isArray(month)
    ) {
      throw new Error(`${name} contains an invalid month.`);
    }

    for (const times of Object.values(month)) {
      if (
        !Array.isArray(times) ||
        times.length < expectedLength ||
        times.some(time => typeof time !== "string")
      ) {
        throw new Error(`${name} contains invalid prayer times.`);
      }
    }
  }
}

// Save updated calendar to an existing JSON file
async function saveJSON(file, data) {
  const temporaryFile = file + ".tmp";

  await fs.writeFile(
    temporaryFile,
    JSON.stringify(data, null, 2),
    "utf8"
  );

  await fs.rename(temporaryFile, file);
}

// Fetch and update both calendars
async function updateMawaqit() {
  console.log("Fetching Nimrah Masjid timetable...");

  const response = await fetch(MAWAQIT_URL, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "text/html"
    },
    signal: AbortSignal.timeout(15000)
  });

  if (!response.ok) {
    throw new Error(
      `Mawaqit returned HTTP ${response.status}`
    );
  }

  const html = await response.text();

  const confData = extractConfData(html);

  // Confirm that the data belongs to Nimrah Masjid
  if (
    confData.name &&
    !confData.name.toLowerCase().includes("nimrah")
  ) {
    throw new Error("The returned timetable is not Nimrah Masjid.");
  }

  // Extract both calendars
  const prayerCalendar = confData.calendar;
  const iqamaCalendar = confData.iqamaCalendar;

  // Display diagnostic information
  console.log("\nMawaqit data inspection:");

  console.log(
    "Prayer calendar months:",
    prayerCalendar?.length
  );

  console.log(
    "Iqama calendar months:",
    iqamaCalendar?.length
  );

  console.log(
    "Iqama calendar preview:",
    JSON.stringify(iqamaCalendar)?.slice(0, 1000)
  );

  // Validate both calendars before saving anything
  validateCalendar(
    prayerCalendar,
    6,
    "Prayer calendar"
  );

  validateCalendar(
    iqamaCalendar,
    5,
    "Iqama calendar"
  );

  // Update the existing JSON files
  await saveJSON(PRAYER_FILE, prayerCalendar);

  await saveJSON(IQAMA_FILE, iqamaCalendar);

  console.log("\nSuccessfully updated both calendars!");
}

updateMawaqit().catch(error => {
  console.error("\nMawaqit update failed:", error.message);
  process.exitCode = 1;
});
