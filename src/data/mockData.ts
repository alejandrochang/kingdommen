import LetsAllBeLosers from "../assets/letsallbealllosers.png";
import CarryYourCross from "../assets/carryyourcross.jpg";

export const mockData: BlogListProps = {
  posts: [
    {
      id: "lets-all-be-losers",
      title: "Lets All Be Losers",
      content: "Are you willing to lay down your life for Jesus? Pastor Keira Smallcombe brings us the second installment of our series, Sold Out, teaching from Matthew 16. When you let go of the world and lay down your life, you can take up the greater purpose and plans He has for you.  Press play and get ready to be sold out for the kingdom.",
      date: "2024-01-14",
      src: "https://www.youtube.com/embed/VxiAADFxROE?si=6c0hXkGNgosF1w3z",
      coverImg: LetsAllBeLosers,
      series: 'Sold Out',
      scriptures: ['Matthew 16:24-26', 'John 12:24-26', 'John 10:17-18', 'John 15:13-14'],
      notes: [
        'In your losing you can actually be winning. When you let go of the world and lay down your life, you can take up the greater purpose and plans He has for you. Less of you is more of Him. When you lose your life for Jesus, you gain your life in Jesus.',
        'The world says, “I have to get mine.” Jesus says, “I have to give mine.” The world says, “I have to be first.” Jesus says, “I have to be last.” The world says, “I have to be served.” Jesus says, “I have to serve.” The world says, “I have to be the greatest.” Jesus says, “I have to be the least.” The world says, “I have to be the boss.” Jesus says, “I have to be the servant.” The world says, “I have to be the winner.” Jesus says, “I have to be the loser.”',
        'The kingdom of Heaven is an upside down kingdom. Where the world does the opposite of what Jesus says, we are called to do the opposite of what the world says.',
        'With the loss of yourself, the death of yourself, the laying down of yourself, you gain the life of Jesus. For Jesus raises the dead. How can Christ be raised in you if you are not dead? How can Christ be in you with you in you?',
        'Our identity is found in Christ. We are not our own. We are bought with a price. You are the Lords friend if you do what he comands. God is the only one whofulfills covenants and promises. Its a promise that YOU WILL FIND YOUR LIFE IF YOU LAY IT DOWN!',
        'Some questions to ask yourself: What am I holding onto that I need to let go off? What do I need to leave at the altar? What from me must die, so that it can be resurected by the only one who can?'
      ],
    },
    {
      id: "carry-your-cross",
      title: "Carry Your Cross",
      content:
        "Get ready to start the year “Sold Out” for Jesus. In the first sermon of the year titled Carry Your Cross, Pastor Adam explores the undeniable cost of answering the calling of Christ Jesus. Get ready to be challenged as we learn that the formula of faith is actually letting go of some things, and taking hold of Jesus.",
      date: "2024-01-07",
      src: "https://www.youtube.com/embed/LoSpNWFzF-k?si=XZpgCi_5yGHPsLTE",
      coverImg: CarryYourCross,
      series: 'Sold Out',
      scriptures: ['Matthew 16:24-26', 'Luke 14:25-33', 'Matthew 10:37-39', 'Mark 8:34-38'],
      notes: [
        'The formula of faith is letting go of some things and taking hold of Jesus.',
      ],
    },
  ],
};

export interface BlogPostData {
  id: string;
  title: string;
  content: string;
  date: string;
  src: string;
  coverImg: string;
  series: string;
  scriptures: string[];
  notes: string[];
}

export interface BlogListProps {
  posts: BlogPostData[];
}
