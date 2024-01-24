import BuildingIntimacyGod from "../assets/BuildingIntimacyGod.webp";

export const mockData: BlogListProps = {
  posts: [
    {
      id: "building-intimacy-with-god",
      title: "Building Intimacy with God",
      content:
        "In the midst of anxiety, fear, or worry, God's Word tells us to fix our eyes on Him, handing over our worries into His care. But what does that look like practically? What if we don’t feel close to Him? How exactly do we build an intimate relationship with Him? This devotional with Dr. Juli Slattery explores how we can build intimacy with God.",
      date: "2024-01-25",
      url: "https://www.bible.com/reading-plans/23939-building-intimacy-with-god",
      coverImg: BuildingIntimacyGod,
      series: "Building Intimacy With God",
      scriptures: [
        { verse: "Ephesians 1:17-19", day: 1 },
        { verse: "Jeremiah 29:12-14", day: 1 },
        { verse: "John 15:5-8", day: 1 },
        { verse: "2 Corinthians 10:3-4", day: 2 },
        { verse: "Isaiah 29:13", day: 2 },
        { verse: "Mark 10:17-22", day: 2 },
        { verse: "Mark 12:29-30", day: 3 },
        { verse: "Psalms 95:1-11", day: 3 },
        { verse: "Luke 15:11-32", day: 3 },
        { verse: "Matthew 10:38-39", day: 4 },
        { verse: "Luke 10:38-42", day: 4 },
        { verse: "Hebews 10:23-25", day: 5 },
        { verse: "1 Thessalonians 5:10-11", day: 5 },
      ],
      notes: ["Day 1: Is Intimacy With God Possible? - What does intimacy with God practically mean? Since the Spirit of revelation allows us to know him better, how van we get closer to Him? It is definitely possible, but requires our participation. The Lord says to seek him with all your heart and soul and then you will find him.",
      "Day 2: Barriers to Intimacy with God - Any Barriers that you're currently facing that prevent you from reaching new levels of intimacy?",
      "Day 3: Worshipping God with our Hears - So how can we get closer to God? Any ways you can think of that have worked for you or haven't? Some ways we can get closer to his is through worship and surrender. Intimacy means developing a pattern or rythmn of life that is centered on God. When we fall in love with Jesus obedience will natural flow from you.",
      "Day 4: Making Intimacy with God a lifetime Priority - Do you think intimacy with God is a priority? How can our actions demonstrate this? Intimacy with God will become a regular priority when you believe it is absolutely critical for you to function.",
      "Day 5: What is Your Next Step? - What is your next step in building intimacy with God? What is one thing you can do today to take that step? What are some very practical steps that can lead us to his presence?",
    ],
    },
  ],
};

export interface BlogPostData {
  id: string;
  title: string;
  content: string;
  date: string;
  url: string;
  coverImg: string;
  series: string;
  scriptures: {
    verse: string;
    day: number;
  }[];
  notes: string[];
}

export interface BlogListProps {
  posts: BlogPostData[];
}
