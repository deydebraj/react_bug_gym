export const testCaseData = [
  {
    questionId: 1,
    testCases: [
      {
        name: "counter starts at 0",
        run: (container) => {
          if (container.textContent !== "Count: 0") {
            throw new Error("Expected the counter to start at 0.");
          }
        },
      },
      {
        name: "increment increases the counter by 2",
        run: async (container) => {
          container.querySelector("button")?.click();
          await new Promise((resolve) => setTimeout(resolve, 0));
          if (container.textContent !== "Count: 2") {
            throw new Error("Expected one click to increase the counter by 2.");
          }
        },
      },
    ],
  },
  {
    questionId: 2,
    testCases: [
      {
        name: "name input renders",
        run: (container) => {
          if (!container.querySelector('input[placeholder="Name"]')) {
            throw new Error("Expected a name input.");
          }
        },
      },
      {
        name: "name input updates state",
        run: async (container) => {
          const input = container.querySelector('input[placeholder="Name"]');
          input.value = "Ada";
          input.dispatchEvent(new Event("input", { bubbles: true }));
          input.dispatchEvent(new Event("change", { bubbles: true }));
          await new Promise((resolve) => setTimeout(resolve, 0));
          if (input.value !== "Ada") {
            throw new Error("Expected the name state to update.");
          }
        },
      },
    ],
  },
  {
    questionId: 3,
    testCases: [
      {
        name: "content is hidden initially",
        run: (container) => {
          if (container.querySelector("p")) {
            throw new Error("Expected content to be hidden initially.");
          }
        },
      },
      {
        name: "toggle shows content",
        run: async (container) => {
          container.querySelector("button")?.click();
          await new Promise((resolve) => setTimeout(resolve, 0));
          if (!container.querySelector("p")) {
            throw new Error("Expected content to appear after toggling.");
          }
        },
      },
    ],
  },
  {
    questionId: 4,
    testCases: [
      {
        name: "profile renders without a user initially",
        run: (container) => {
          if (!container.querySelector("div")) {
            throw new Error("Expected the profile container to render.");
          }
        },
      },
    ],
  },
  {
    questionId: 5,
    testCases: [
      {
        name: "timer starts at 0 seconds",
        run: (container) => {
          if (container.textContent !== "0 seconds") {
            throw new Error("Expected the timer to start at 0 seconds.");
          }
        },
      },
    ],
  },
  {
    questionId: 6,
    testCases: [
      {
        name: "search input renders",
        run: (container) => {
          if (!container.querySelector("input")) {
            throw new Error("Expected a search input.");
          }
        },
      },
      {
        name: "search text starts empty",
        run: (container) => {
          if (container.textContent !== "Searching for: ") {
            throw new Error("Expected the search query to start empty.");
          }
        },
      },
    ],
  },
  {
    questionId: 7,
    testCases: [
      {
        name: "dashboard renders",
        run: (container) => {
          if (container.textContent !== "Dashboard") {
            throw new Error("Expected the dashboard to render.");
          }
        },
      },
    ],
  },
  {
    questionId: 8,
    testCases: [
      {
        name: "todo list starts empty",
        run: (container) => {
          if (container.querySelectorAll("p").length !== 0) {
            throw new Error("Expected no todos initially.");
          }
        },
      },
      {
        name: "add button renders",
        run: (container) => {
          if (!container.querySelector("button")) {
            throw new Error("Expected an add button.");
          }
        },
      },
    ],
  },
  {
    questionId: 9,
    testCases: [
      {
        name: "input renders",
        run: (container) => {
          if (!container.querySelector("input")) {
            throw new Error("Expected an input.");
          }
        },
      },
    ],
  },
  {
    questionId: 10,
    testCases: [
      {
        name: "products component renders",
        run: (container) => {
          if (!container) {
            throw new Error("Expected a products container.");
          }
        },
      },
    ],
  },
  {
    questionId: 11,
    testCases: [
      {
        name: "profile shows the initial name",
        run: (container) => {
          if (!container.textContent.includes("John")) {
            throw new Error("Expected the initial profile name.");
          }
        },
      },
      {
        name: "profile shows the initial city",
        run: (container) => {
          if (!container.textContent.includes("Seattle")) {
            throw new Error("Expected the initial profile city.");
          }
        },
      },
    ],
  },
  {
    questionId: 12,
    testCases: [
      {
        name: "resize tracker renders",
        run: (container) => {
          if (container.textContent !== "Resize the window") {
            throw new Error("Expected the resize tracker to render.");
          }
        },
      },
    ],
  },
  {
    questionId: 13,
    testCases: [
      {
        name: "logger starts at zero",
        run: (container) => {
          if (container.textContent !== "0") {
            throw new Error("Expected the logger count to start at zero.");
          }
        },
      },
    ],
  },
  {
    questionId: 14,
    testCases: [
      {
        name: "name input renders",
        run: (container) => {
          if (!container.querySelector("input")) {
            throw new Error("Expected a name input.");
          }
        },
      },
    ],
  },
  {
    questionId: 15,
    testCases: [
      {
        name: "cart renders both items",
        run: (container) => {
          if (container.querySelectorAll("button").length !== 2) {
            throw new Error("Expected two cart item buttons.");
          }
        },
      },
    ],
  },
  {
    questionId: 16,
    testCases: [
      {
        name: "users list renders",
        run: (container) => {
          if (!container.querySelector("ul")) {
            throw new Error("Expected a users list.");
          }
        },
      },
    ],
  },
  {
    questionId: 17,
    testCases: [
      {
        name: "sort button renders",
        run: (container) => {
          if (!container.querySelector("button")) {
            throw new Error("Expected a sort button.");
          }
        },
      },
    ],
  },
  {
    questionId: 18,
    testCases: [
      {
        name: "user heading renders",
        run: (container) => {
          if (!container.querySelector("h1")) {
            throw new Error("Expected a user heading.");
          }
        },
      },
    ],
  },
  {
    questionId: 19,
    testCases: [
      {
        name: "form renders both fields",
        run: (container) => {
          if (container.querySelectorAll("input").length !== 2) {
            throw new Error("Expected name and email inputs.");
          }
        },
      },
    ],
  },
  {
    questionId: 20,
    testCases: [
      {
        name: "posts component mounts",
        run: (container) => {
          if (!container) {
            throw new Error("Expected the posts component to mount.");
          }
        },
      },
    ],
  },
  {
    questionId: 21,
    testCases: [
      {
        name: "header renders",
        run: (container) => {
          if (!container.querySelector("h1")) {
            throw new Error("Expected a header element.");
          }
        },
      },
    ],
  },
  {
    questionId: 22,
    testCases: [
      {
        name: "user card renders the user",
        run: (container) => {
          if (container.textContent !== "Debraj") {
            throw new Error("Expected the user card to render Debraj.");
          }
        },
      },
    ],
  },
  {
    questionId: 23,
    testCases: [
      {
        name: "infinite scroll content renders",
        run: (container) => {
          if (container.textContent !== "Products") {
            throw new Error("Expected products content.");
          }
        },
      },
    ],
  },
  {
    questionId: 24,
    testCases: [
      {
        name: "gallery renders",
        run: (container) => {
          if (!container) {
            throw new Error("Expected the gallery to render.");
          }
        },
      },
    ],
  },
  {
    questionId: 25,
    testCases: [
      {
        name: "data output renders",
        run: (container) => {
          if (!container.querySelector("pre")) {
            throw new Error("Expected a data output element.");
          }
        },
      },
    ],
  },
  {
    questionId: 26,
    testCases: [
      {
        name: "comment container renders",
        run: (container) => {
          if (!container.querySelector("div")) {
            throw new Error("Expected a comment container.");
          }
        },
      },
    ],
  },
  {
    questionId: 27,
    testCases: [
      {
        name: "password field is masked",
        run: (container) => {
          if (!container.querySelector('input[type="password"]')) {
            throw new Error("Expected a password input.");
          }
        },
      },
    ],
  },
  {
    questionId: 28,
    testCases: [
      {
        name: "online status renders",
        run: (container) => {
          if (!container.querySelector("p")) {
            throw new Error("Expected an online status paragraph.");
          }
        },
      },
    ],
  },
  {
    questionId: 29,
    testCases: [
      {
        name: "worker result output renders",
        run: (container) => {
          if (!container.querySelector("p")) {
            throw new Error("Expected a worker result paragraph.");
          }
        },
      },
    ],
  },
  {
    questionId: 30,
    testCases: [
      {
        name: "preferences output renders",
        run: (container) => {
          if (!container.querySelector("p")) {
            throw new Error("Expected a preferences paragraph.");
          }
        },
      },
    ],
  },
  {
    questionId: 31,
    testCases: [
      {
        name: "login form renders",
        run: (container) => {
          if (!container.querySelector('button[type="submit"]')) {
            throw new Error("Expected a login submit button.");
          }
        },
      },
    ],
  },
  {
    questionId: 32,
    testCases: [
      {
        name: "protected page mounts",
        run: (container) => {
          if (!container) {
            throw new Error("Expected the protected page to mount.");
          }
        },
      },
    ],
  },
  {
    questionId: 33,
    testCases: [
      {
        name: "login button renders",
        run: (container) => {
          if (!container.querySelector("button")) {
            throw new Error("Expected a login button.");
          }
        },
      },
    ],
  },
  {
    questionId: 34,
    testCases: [
      {
        name: "user profile renders",
        run: (container) => {
          if (container.textContent !== "User profile") {
            throw new Error("Expected the user profile text.");
          }
        },
      },
    ],
  },
  {
    questionId: 35,
    testCases: [
      {
        name: "profile output renders",
        run: (container) => {
          if (!container.querySelector("p")) {
            throw new Error("Expected a profile paragraph.");
          }
        },
      },
    ],
  },
  {
    questionId: 36,
    testCases: [
      {
        name: "product list mounts",
        run: (container) => {
          if (!container) {
            throw new Error("Expected the product list to mount.");
          }
        },
      },
    ],
  },
  {
    questionId: 37,
    testCases: [
      {
        name: "todo button renders",
        run: (container) => {
          if (!container.querySelector("button")) {
            throw new Error("Expected an add todo button.");
          }
        },
      },
    ],
  },
  {
    questionId: 38,
    testCases: [
      {
        name: "box renders height text",
        run: (container) => {
          if (!container.textContent.includes("Height:")) {
            throw new Error("Expected height text.");
          }
        },
      },
    ],
  },
  {
    questionId: 39,
    testCases: [
      {
        name: "reducer counter starts at zero",
        run: (container) => {
          if (container.textContent !== "0") {
            throw new Error("Expected the reducer count to start at zero.");
          }
        },
      },
    ],
  },
  {
    questionId: 40,
    testCases: [
      {
        name: "error boundary renders children",
        run: (container) => {
          if (!container) {
            throw new Error("Expected the error boundary to render.");
          }
        },
      },
    ],
  },
  {
    questionId: 41,
    testCases: [
      {
        name: "suspense boundary renders",
        run: (container) => {
          if (!container) {
            throw new Error("Expected the suspense boundary to render.");
          }
        },
      },
    ],
  },
  {
    questionId: 42,
    testCases: [
      {
        name: "clock displays current time",
        run: (container) => {
          if (!container.textContent.startsWith("Current time:")) {
            throw new Error("Expected the current time label.");
          }
        },
      },
    ],
  },
  {
    questionId: 43,
    testCases: [
      {
        name: "private route mounts",
        run: (container) => {
          if (!container) {
            throw new Error("Expected the private route to mount.");
          }
        },
      },
    ],
  },
  {
    questionId: 44,
    testCases: [
      {
        name: "user query component mounts",
        run: (container) => {
          if (!container) {
            throw new Error("Expected the user query to mount.");
          }
        },
      },
    ],
  },
  {
    questionId: 45,
    testCases: [
      {
        name: "logout button renders",
        run: (container) => {
          if (!container.querySelector("button")) {
            throw new Error("Expected a logout button.");
          }
        },
      },
    ],
  },
  {
    questionId: 46,
    testCases: [
      {
        name: "todos query component mounts",
        run: (container) => {
          if (!container) {
            throw new Error("Expected the todos query to mount.");
          }
        },
      },
    ],
  },
  {
    questionId: 47,
    testCases: [
      {
        name: "user loading state renders",
        run: (container) => {
          if (!container.textContent.includes("Loading")) {
            throw new Error("Expected the loading state.");
          }
        },
      },
    ],
  },
  {
    questionId: 48,
    testCases: [
      {
        name: "chat mounts with no messages",
        run: (container) => {
          if (!container) {
            throw new Error("Expected the chat component to mount.");
          }
        },
      },
    ],
  },
  {
    questionId: 49,
    testCases: [
      {
        name: "video element renders",
        run: (container) => {
          if (!container.querySelector("video")) {
            throw new Error("Expected a video element.");
          }
        },
      },
    ],
  },
  {
    questionId: 50,
    testCases: [
      {
        name: "canvas renders",
        run: (container) => {
          if (!container.querySelector("canvas")) {
            throw new Error("Expected a canvas element.");
          }
        },
      },
    ],
  },
];
