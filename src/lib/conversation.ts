import { Message } from "@/components/templates/MessagesContext";

export interface Conversation { 
  id: number;
  topic: string;
  messages: Message[];
}

const conversations: Conversation[] = [
  {
    id: 13,
    topic: "JavaScript Coding",
    messages: [
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
          "Creating an array of objects in JavaScript is a common and useful way to manage structured data. Here's an example of how you can create an array of objects:\n\n\n```javascript\nconst arr = [\n { id: 1, name: 'John' },\n { id: 2, name: 'Jane' },\n { id: 3, name: 'Alice' }\n];\n```\n\nIn this example, `arr` is an array containing three objects, each of which has two properties: `id` and `name`. You can add more objects or modify the existing ones as needed. Let me know if you'd like further clarification or examples!",
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
        content: `### Tabela de Exemplo

| Nome | Idade | Cidade |
|----------|-------|----------------|
| André | 30 | Rio de Janeiro |
| Maria | 25 | São Paulo |
| João | 35 | Belo Horizonte |

### Exemplo de Código JavaScript

~~~javascript
// Array de objetos representando a tabela
const pessoas = [
{ nome: "André", idade: 30, cidade: "Rio de Janeiro" },
{ nome: "Maria", idade: 25, cidade: "São Paulo" },
{ nome: "João", idade: 35, cidade: "Belo Horizonte" }
];

// Função para imprimir cada pessoa no console
pessoas.forEach(pessoa => {
console.log(\`Nome: \${pessoa.nome}, Idade: \${pessoa.idade}, Cidade: \${pessoa.cidade}\`);
});

~~~`,
        documents: null,
        timestamp: "2023-10-03T10:04:30Z",
        score: null,
        comment: null,
      },
    ],
  },
  {
    id: 14,
    topic: "Python Data Analysis",
    messages: [
      {
        message_id: 1,
        user_key: "user_002",
        role: "user",
        content: "Hi, I need help with pandas in Python.",
        documents: null,
        timestamp: "2023-10-04T09:00:00Z",
        score: null,
        comment: null,
      },
      {
        message_id: 2,
        user_key: "user_002",
        role: "assistant",
        content:
          "Hello! I'd be happy to help you with pandas in Python. What specific task are you trying to accomplish?",
        documents: null,
        timestamp: "2023-10-04T09:00:10Z",
        score: "5",
        comment: "Prompt and helpful response.",
      },
      {
        message_id: 3,
        user_key: "user_002",
        role: "user",
        content:
          "I'm trying to load a CSV file and perform some basic data analysis.",
        documents: null,
        timestamp: "2023-10-04T09:01:00Z",
        score: null,
        comment: null,
      },
      {
        message_id: 4,
        user_key: "user_002",
        role: "assistant",
        content:
          "Great! I can help you with that. Here's a basic example of how to load a CSV file and perform some simple analysis using pandas:\n\n```python\nimport pandas as pd\n\n# Load the CSV file\ndf = pd.read_csv('your_file.csv')\n\n# Display the first few rows\nprint(df.head())\n\n# Get basic information about the dataset\nprint(df.info())\n\n# Calculate summary statistics\nprint(df.describe())\n\n# Select a specific column\nprint(df['column_name'])\n\n# Filter data\nfiltered_df = df[df['column_name'] > 5]\n\n# Group by and aggregate\ngrouped = df.groupby('category').mean()\nprint(grouped)\n```\n\nThis script demonstrates loading a CSV, viewing data, getting info, calculating statistics, selecting columns, filtering, and grouping. Let me know if you need more specific guidance!",
        documents: null,
        timestamp: "2023-10-04T09:01:30Z",
        score: "5",
        comment: "Excellent explanation with practical code example.",
      },
      {
        message_id: 5,
        user_key: "user_002",
        role: "user",
        content: "Thanks! How can I visualize this data using matplotlib?",
        documents: null,
        timestamp: "2023-10-04T09:02:30Z",
        score: null,
        comment: null,
      },
      {
        message_id: 6,
        user_key: "user_002",
        role: "assistant",
        content:
          "Certainly! Matplotlib is a great library for data visualization in Python. Here's an example of how you can create some basic plots using matplotlib with your pandas DataFrame:\n\n```python\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Assuming you've already loaded your data into 'df'\n\n# Line plot\ndf.plot(x='date_column', y='value_column')\nplt.title('Line Plot')\nplt.xlabel('Date')\nplt.ylabel('Value')\nplt.show()\n\n# Bar plot\ndf['category_column'].value_counts().plot(kind='bar')\nplt.title('Bar Plot')\nplt.xlabel('Category')\nplt.ylabel('Count')\nplt.show()\n\n# Scatter plot\nplt.scatter(df['x_column'], df['y_column'])\nplt.title('Scatter Plot')\nplt.xlabel('X')\nplt.ylabel('Y')\nplt.show()\n\n# Histogram\ndf['numeric_column'].hist(bins=20)\nplt.title('Histogram')\nplt.xlabel('Value')\nplt.ylabel('Frequency')\nplt.show()\n\n# Box plot\ndf.boxplot(column=['numeric_column1', 'numeric_column2'])\nplt.title('Box Plot')\nplt.ylabel('Value')\nplt.show()\n```\n\nThis script shows how to create various types of plots: line, bar, scatter, histogram, and box plot. Remember to replace the column names with the actual names from your DataFrame. You can customize these plots further by adjusting colors, styles, and other parameters. Let me know if you need any clarification or have more questions!",
        documents: null,
        timestamp: "2023-10-04T09:03:00Z",
        score: "5",
        comment:
          "Comprehensive explanation with diverse visualization examples.",
      },
      {
        message_id: 7,
        user_key: "user_002",
        role: "user",
        content:
          "This is really helpful! Do you have any resources for learning more about data analysis with Python?",
        documents: null,
        timestamp: "2023-10-04T09:04:00Z",
        score: null,
        comment: null,
      },
      {
        message_id: 8,
        user_key: "user_002",
        role: "assistant",
        content:
          "I'm glad you found it helpful! There are many great resources for learning more about data analysis with Python. Here are some recommendations:\n\n# Online Courses:\n   - Coursera: 'Data Analysis with Python' by IBM\n   - edX: 'Using Python for Research' by Harvard University\n   - DataCamp: Various Python data analysis courses\n\n## Books:\n   - 'Python for Data Analysis' by Wes McKinney\n   - 'Data Science from Scratch' by Joel Grus\n   - 'Hands-On Machine Learning with Scikit-Learn and TensorFlow' by Aurélien Géron\n\n### Websites and Tutorials:\n   - Official documentation for pandas, matplotlib, and numpy\n   - Real Python (realpython.com): Excellent tutorials on various Python topics\n   - Towards Data Science (towardsdatascience.com): Articles on data science and analysis\n\n4. Practice Platforms:\n   - Kaggle: Datasets and competitions for hands-on practice\n   - GitHub: Many open-source projects and example notebooks\n\n5. YouTube Channels:\n   - Corey Schafer: Python programming tutorials\n   - sentdex: Data analysis and machine learning tutorials\n\nRemember, the best way to learn is by doing. Try to work on small projects or participate in Kaggle competitions to apply what you're learning. Good luck with your data analysis journey!",
        documents: null,
        timestamp: "2023-10-04T09:04:30Z",
        score: "5",
        comment:
          "Excellent list of resources covering various learning styles.",
      },
      {
        message_id: 9,
        user_key: "user_002",
        role: "user",
        content: "Thank you so much for all your help!",
        documents: null,
        timestamp: "2023-10-04T09:05:00Z",
        score: null,
        comment: null,
      },
      {
        message_id: 10,
        user_key: "user_002",
        role: "assistant",
        content:
          "You're welcome! I'm happy I could help you with your Python data analysis questions. If you have any more questions in the future, don't hesitate to ask. Good luck with your data analysis projects!",
        documents: null,
        timestamp: "2023-10-04T09:05:10Z",
        score: "5",
        comment: "Polite conclusion to the conversation.",
      },
    ],
  },
  {
    id: 15,
    topic: "HTML/CSS Layout",
    messages: [
      {
        message_id: 1,
        user_key: "user_003",
        role: "user",
        content: "I'm struggling with CSS flexbox. Can you explain it?",
        documents: null,
        timestamp: "2023-10-05T14:00:00Z",
        score: null,
        comment: null,
      },
      {
        message_id: 2,
        user_key: "user_003",
        role: "assistant",
        content:
          "Of course! CSS flexbox is a powerful layout model. Let's start with the basics. What specific aspect of flexbox are you having trouble with?",
        documents: null,
        timestamp: "2023-10-05T14:00:15Z",
        score: "4",
        comment:
          "Good initial response, but could provide more immediate information.",
      },
      // Add more messages for this conversation
    ],
  },
];

export function getConversationById(id: number): Conversation {
  return (
    conversations.find((conversation) => conversation.id === id) || {
      id: -1,
      topic: "Not Found",
      messages: [],
    }
  );
}

export function addMessageToConversation(conversationId: number, content: string): void {
  // Find the conversation with the given ID
  const conversation = conversations.find(conv => conv.id === conversationId);

  if (!conversation) {
    console.error(`Conversation with ID ${conversationId} not found.`);
    return;
  }

  // Get the last message in the conversation to determine the next message_id
  const lastMessage = conversation.messages[conversation.messages.length - 1];
  const newMessageId = lastMessage ? lastMessage.message_id + 1 : 1;

  // Create the new message object
  const newMessage: Message = {
    message_id: newMessageId,
    user_key: "user_001", // You might want to make this dynamic or pass it as a parameter
    role: "user", // Assuming new messages are always from the user
    content: content,
    documents: null,
    timestamp: new Date().toISOString(),
    score: null,
    comment: null,
  };

  // Add the new message to the conversation
  conversation.messages.push(newMessage);
}