// Current conference facts and teaching outline from YouthForGod_2027.pdf.
export const conference = {
  year: 2027,
  dates: "May 28 – 29, 2027",
  location: "Bible Baptist Church, Citrus Heights, CA",
  theme: "You – a lit’L Christian?",
  reference: "Ephesians 5:8",
};

type Session = {
  speaker?: string;
  verse: string;
  summary: string;
  supportingTexts: string;
};

type ScheduleSlot = {
  time: string;
  activity: string;
  session?: Session;
};

type ConferenceDay = {
  label: string;
  date: string;
  slots: ScheduleSlot[];
};

export const conferenceSchedule: ConferenceDay[] = [
  {
    label: "Friday",
    date: "May 28",
    slots: [
      { time: "5:00 PM", activity: "Registration" },
      {
        time: "7:00 PM",
        activity: "Session I · Introduction",
        session: {
          speaker: "Daniel Clark",
          verse: "Ephesians 5:8",
          summary: "Being light in the Lord means keeping Christ at the center, walking as children of light, bearing the fruit of light, and discerning what pleases Him.",
          supportingTexts: "John 3:30; Isaiah 2:5; Isaiah 50:11; John 12:46; Ephesians 5:9–10",
        },
      },
      { time: "8:30 – 10:00 PM", activity: "Tea" },
    ],
  },
  {
    label: "Saturday",
    date: "May 29",
    slots: [
      { time: "7:00 AM", activity: "Registration" },
      {
        time: "9:00 AM",
        activity: "Session II · Expose the works of Darkness",
        session: {
          verse: "Ephesians 5:13",
          summary: "Light exposes darkness. As salt and light, Christians are called to holiness and sanctification through the work of the Spirit.",
          supportingTexts: "1 Peter 1:15–16",
        },
      },
      {
        time: "11:00 AM",
        activity: "Session III · The best use of Time",
        session: {
          verse: "Ephesians 5:15–16",
          summary: "Use time wisely because the days are evil. Understanding the Lord’s will helps us live purposefully and carry out the good works He has prepared for us.",
          supportingTexts: "Matthew 25; Ephesians 2:10",
        },
      },
      { time: "12:30 PM", activity: "Lunch" },
      {
        time: "2:30 PM",
        activity: "Session IV · Be filled with the Spirit",
        session: {
          verse: "Ephesians 5:18b",
          summary: "The Holy Spirit helps, teaches and comforts us. Being filled with the Spirit leads to gratitude, song and melody in our hearts to God.",
          supportingTexts: "John 14:26",
        },
      },
      {
        time: "4:30 PM",
        activity: "Session V · Be imitators of God",
        session: {
          verse: "Ephesians 5:1",
          summary: "Reflect on Christ’s love and sacrifice, turn away from evil, and respond in repentance and renewed commitment to Him. Leave walking as children of light.",
          supportingTexts: "Ephesians 5:2–8; 1 John 1:6–7",
        },
      },
      { time: "6:00 PM", activity: "Supper" },
      { time: "7:00 – 9:00 PM", activity: "Bonfire" },
    ],
  },
];
