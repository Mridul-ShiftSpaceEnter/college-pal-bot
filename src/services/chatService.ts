
import { ResponseData } from "@/types/chat";

// Sample predefined responses for various topics
const responseData: ResponseData = {
  event: [
    "The next major campus event is the Fall Festival this Friday from 4-8pm on the main quad. There will be food, music, and activities!",
    "This weekend we have the Homecoming football game on Saturday at 2pm, followed by the alumni mixer at 5pm.",
    "There's a career fair next Tuesday in the Student Union from 10am-3pm with over 50 employers attending.",
    "The student organization fair is happening next Wednesday from 11am-2pm in the campus center. It's a great opportunity to join clubs!",
  ],
  library: [
    "The library is open Monday-Thursday from 7am-midnight, Friday 7am-8pm, and weekends 9am-8pm. You can access online resources 24/7 through the library portal.",
    "To access the digital library resources off-campus, log in with your student ID and password at library.college.edu.",
    "The library offers research consultations with librarians by appointment. You can schedule one through the library website.",
    "Special collections and course reserves are available at the front desk of the library with your student ID.",
  ],
  dining: [
    "The main dining hall is open for breakfast 7-10am, lunch 11am-2pm, and dinner 5-8pm on weekdays. Weekend hours are brunch 10am-1pm and dinner 5-7pm.",
    "The campus café is open from 7am-10pm daily, and the food court in the student center is open 10am-8pm.",
    "Meal swipes can be used at the dining hall, while Dining Dollars are accepted at all campus food locations including the convenience store.",
    "Vegetarian, vegan, and allergen-free options are available at all dining locations. For special dietary needs, you can speak with the dining services manager.",
  ],
  schedule: [
    "You can access your class schedule through the student portal at my.college.edu by clicking on 'Academic Records' and then 'Class Schedule'.",
    "The final exam schedule is posted on the Registrar's website three weeks before the end of the semester.",
    "If you need to change your schedule, the add/drop period ends on September 15th. You'll need to visit the Registrar's office or use the online system.",
    "For personalized schedule assistance, you can meet with your academic advisor. Schedule an appointment through the advising portal.",
  ],
  clubs: [
    "There are over 150 student organizations on campus ranging from academic clubs to special interest groups and recreational activities.",
    "To join a club, attend their meetings or sign up during the student organization fair. Most clubs also have social media pages where they post updates.",
    "If you want to start a new club, you'll need at least 5 interested students and a faculty advisor. The Student Activities office can help with the process.",
    "Popular clubs include the Debate Team, Robotics Club, Environmental Action Coalition, and various cultural and identity-based organizations.",
  ],
  housing: [
    "On-campus housing options include traditional residence halls for freshmen and sophomores, and apartments for juniors and seniors.",
    "Housing selection for the next academic year usually begins in March. Priority is given based on class year and a lottery system.",
    "For maintenance issues in your residence hall, submit a work order through the Housing portal or contact your Resident Assistant.",
    "Off-campus housing resources are available through the Housing office, which maintains a database of local rentals and roommate matching services.",
  ],
  financial: [
    "Tuition payments for each semester are due two weeks before classes begin. Payment plans are available through the Bursar's office.",
    "For financial aid questions, visit the Financial Aid office in Adams Hall or schedule a virtual appointment through their online calendar.",
    "Scholarship applications for the next academic year open in December and most deadlines are in February. Check the scholarship portal for opportunities.",
    "Work-study positions are posted on the Student Employment website. New jobs are typically added the first week of each semester.",
  ],
  default: [
    "I don't have specific information about that yet, but you can check the college website or visit the Student Services office for assistance.",
    "That's a great question! You might find that information on the student portal or by contacting the relevant department directly.",
    "I'm still learning about that topic. You could ask your academic advisor or check the student handbook for more details.",
    "I don't have that information in my database yet. The Student Information desk in the campus center should be able to help with that question.",
  ]
};

// Function to get a response based on the user's message
export const getBotResponse = (message: string): Promise<string> => {
  return new Promise((resolve) => {
    // Convert message to lowercase for easier matching
    const lowerMessage = message.toLowerCase();
    
    // Check which category the message belongs to
    let category = 'default';
    
    if (lowerMessage.includes('event') || lowerMessage.includes('activities') || lowerMessage.includes('happening')) {
      category = 'event';
    } else if (lowerMessage.includes('library') || lowerMessage.includes('book') || lowerMessage.includes('research')) {
      category = 'library';
    } else if (lowerMessage.includes('dining') || lowerMessage.includes('food') || lowerMessage.includes('eat') || lowerMessage.includes('meal')) {
      category = 'dining';
    } else if (lowerMessage.includes('schedule') || lowerMessage.includes('class') || lowerMessage.includes('time')) {
      category = 'schedule';
    } else if (lowerMessage.includes('club') || lowerMessage.includes('organization') || lowerMessage.includes('join')) {
      category = 'clubs';
    } else if (lowerMessage.includes('housing') || lowerMessage.includes('dorm') || lowerMessage.includes('live') || lowerMessage.includes('residence')) {
      category = 'housing';
    } else if (lowerMessage.includes('financial') || lowerMessage.includes('money') || lowerMessage.includes('pay') || lowerMessage.includes('tuition')) {
      category = 'financial';
    }
    
    // Get array of possible responses for the category
    const responses = responseData[category];
    
    // Select a random response from the array
    const randomIndex = Math.floor(Math.random() * responses.length);
    const response = responses[randomIndex];
    
    // Simulate network delay
    setTimeout(() => {
      resolve(response);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  });
};
