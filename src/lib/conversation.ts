import { Message } from "@/screens/templates/MessagesContext";

const conversation: Message[] = [
  {
    message_id: 1,
    user_key: "user_001",
    role: "user",
    content: "Hello, can you help me with some coding?",
    documents: null,
    timestamp: "2023-10-03T10:00:00Z",
    score: null,
    comment: null,
  },
  {
    message_id: 2,
    user_key: "user_001",
    role: "assistant",
    content:
      "Hello! Of course! I'd be happy to help you with coding. Please let me know what specific topic or problem you're working on, and I'll do my best to assist you. Whether it's JavaScript, HTML, Python, or something else, feel free to provide details so I can tailor my response to your needs.",
    documents: null,
    timestamp: "2023-10-03T10:00:10Z",
    score: "5",
    comment: "Very quick and polite response.",
  },
  {
    message_id: 3,
    user_key: "user_001",
    role: "user",
    content: "I need to create an array of objects in JavaScript.",
    documents: null,
    timestamp: "2023-10-03T10:01:00Z",
    score: null,
    comment: null,
  },
  {
    message_id: 4,
    user_key: "user_001",
    role: "assistant",
    content:
      "Creating an array of objects in JavaScript is a common and useful way to manage structured data. Here's an example of how you can create an array of objects:\n\n\n```javascript\nconst arr = [\n  { id: 1, name: 'John' },\n  { id: 2, name: 'Jane' },\n  { id: 3, name: 'Alice' }\n];\n```\n\nIn this example, `arr` is an array containing three objects, each of which has two properties: `id` and `name`. You can add more objects or modify the existing ones as needed. Let me know if you'd like further clarification or examples!",
    documents: null,
    timestamp: "2023-10-03T10:01:30Z",
    score: null,
    comment: "The example was clear and exactly what I needed.",
  },
  {
    message_id: 5,
    user_key: "user_001",
    role: "user",
    content: "Thanks! How can I add a new object to this array?",
    documents: null,
    timestamp: "2023-10-03T10:02:00Z",
    score: null,
    comment: null,
  },
  {
    message_id: 6,
    user_key: "user_001",
    role: "assistant",
    content:
      "Great question! Once you've created your array of objects, you can add a new object to it using the `push` method. Here's an example:\n\n```javascript\narr.push({ id: 4, name: 'Bob' });\n```\n\nThis will add a new object `{ id: 4, name: 'Bob' }` to the end of the `arr` array. If you'd like to add an object at a specific position, you can use the `splice` method instead. For example:\n\n```javascript\narr.splice(1, 0, { id: 5, name: 'Eve' });\n```\n\nThis adds the object `{ id: 5, name: 'Eve' }` at index `1` without removing any existing elements. Let me know if you'd like further details or examples of other array manipulation methods!",
    documents: null,
    timestamp: "2023-10-03T10:02:30Z",
    score: "4",
    comment:
      "Good explanation, but could include more details on alternative methods.",
  },
  {
    message_id: 7,
    user_key: "user_001",
    role: "user",
    content:
      "Got it. Do you have any documentation links for JavaScript arrays?",
    documents: null,
    timestamp: "2023-10-03T10:03:00Z",
    score: null,
    comment: null,
  },
  {
    message_id: 8,
    user_key: "user_001",
    role: "assistant",
    content:
      "Certainly! JavaScript arrays are incredibly versatile and are widely used for handling collections of data. To deepen your understanding, I recommend checking out the official documentation, which provides a comprehensive guide to arrays, including their methods and properties. You can explore topics such as iteration, modification, and more advanced techniques for working with arrays.",
    documents:
      "[JavaScript Array Documentation - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)",
    timestamp: "2023-10-03T10:03:30Z",
    score: "5",
    comment: "Helpful link to the official documentation.",
  },
  {
    message_id: 9,
    user_key: "user_001",
    role: "user",
    content:
      "Can you return me some Markdown text so I can test some features?",
    documents: null,
    timestamp: "2023-10-03T10:04:00Z",
    score: null,
    comment: null,
  },
  {
    message_id: 10,
    user_key: "user_001",
    role: "assistant",
    content:
      "Of course! Here's some markdown:\n\n\nA paragraph with *emphasis* and **strong importance**.\n\n> A block quote with ~strikethrough~ and a URL: https://reactjs.org.\n\n* Lists\n* [ ] todo\n* [x] done\n\nA table:\n\n| ID  | Name       | Age | Country    |\n|-----|------------|-----|------------|\n| 1   | Alice      | 28  | USA        |\n| 2   | Bob        | 34  | Canada     |\n| 3   | Charlie    | 22  | UK         |\n| 4   | Diana      | 29  | Australia  |\n| 5   | Ethan      | 31  | New Zealand|\n\nAnd we can test pictures too, look:\n![Picture of a dog.](https://placehold.co/1280x720/222/111)\n\n~~~js\nconsole.log('It works!')\n~~~\n",
    documents: null,
    timestamp: "2023-10-03T10:04:30Z",
    score: null,
    comment: null,
  },
];

export default conversation;
