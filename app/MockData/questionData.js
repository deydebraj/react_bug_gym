export const questionData = [
  {
    questionId: 1,
    question: `
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleDouble = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return <button onClick={handleDouble}>Count: {count}</button>;
}`,
  },
  {
    questionId: 2,
    question: `
import { useState } from "react";

export default function UserForm() {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleNameChange = (event) => {
    user.name = event.target.value;
    setUser(user);
  };

  return (
    <input
      value={user.name}
      onChange={handleNameChange}
      placeholder="Name"
    />
  );
}`,
  },
  {
    questionId: 3,
    question: `
import { useState } from "react";

export default function Toggle() {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible(!visible);
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {visible && <p>Content</p>}
    </div>
  );
}`,
  },
  {
    questionId: 4,
    question: `
import { useEffect, useState } from "react";

export default function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/users/" + userId)
      .then((response) => response.json())
      .then(setUser);
  }, []);

  return <div>{user?.name}</div>;
}`,
  },
  {
    questionId: 5,
    question: `
import { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
  }, []);

  return <p>{seconds} seconds</p>;
}`,
  },
  {
    questionId: 6,
    question: `
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setTimeout(() => {
      setQuery(event.target.value);
    }, 500);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <p>Searching for: {query}</p>
    </div>
  );
}`,
  },
  {
    questionId: 7,
    question: `
import { useEffect } from "react";

export default function Dashboard({ isLoggedIn }) {
  if (isLoggedIn) {
    useEffect(() => {
      console.log("Dashboard mounted");
    }, []);
  }

  return <div>Dashboard</div>;
}`,
  },
  {
    questionId: 8,
    question: `
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    todos.push({ id: Date.now(), text: "New task" });
    setTodos(todos);
  };

  return (
    <>
      <button onClick={addTodo}>Add</button>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </>
  );
}`,
  },
  {
    questionId: 9,
    question: `
import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");

  return (
    <input
      value={value}
      onChange={() => setValue(event.target.value)}
    />
  );
}`,
  },
  {
    questionId: 10,
    question: `
import { useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  fetch("/api/products")
    .then((response) => response.json())
    .then(setProducts);

  return products.map((product) => (
    <div key={product.id}>{product.name}</div>
  ));
}`,
  },
  {
    questionId: 11,
    question: `
import { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "John",
    address: { city: "Seattle" },
  });

  const changeCity = () => {
    setProfile({
      address: { city: "Portland" },
    });
  };

  return (
    <div>
      <p>{profile.name}</p>
      <p>{profile.address.city}</p>
      <button onClick={changeCity}>Change city</button>
    </div>
  );
}`,
  },
  {
    questionId: 12,
    question: `
import { useEffect } from "react";

export default function WindowTracker() {
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
    });
  }, []);

  return <p>Resize the window</p>;
}`,
  },
  {
    questionId: 13,
    question: `
import { useEffect, useState } from "react";

export default function Logger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(count);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`,
  },
  {
    questionId: 14,
    question: `
import { useState } from "react";

export default function NameForm() {
  const [name, setName] = useState();

  return (
    <input
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
  );
}`,
  },
  {
    questionId: 15,
    question: `
import { useState } from "react";

export default function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "Phone" },
    { id: 2, name: "Laptop" },
  ]);

  const removeItem = (id) => {
    setItems(items.splice(id, 1));
  };

  return items.map((item) => (
    <button key={item.id} onClick={() => removeItem(item.id)}>
      Remove {item.name}
    </button>
  ));
}`,
  },
  {
    questionId: 16,
    question: `
export default function Users({ users }) {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          <input defaultValue={user.name} />
        </li>
      ))}
    </ul>
  );
}`,
  },
  {
    questionId: 17,
    question: `
import { useState } from "react";

export default function SortableList({ initialItems }) {
  const [items, setItems] = useState(initialItems);

  const sortItems = () => {
    items.sort((a, b) => a.name.localeCompare(b.name));
    setItems(items);
  };

  return (
    <>
      <button onClick={sortItems}>Sort</button>
      {items.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </>
  );
}`,
  },
  {
    questionId: 18,
    question: `
import { useEffect, useState } from "react";

export default function User({ id }) {
  const [name, setName] = useState("");

  useEffect(async () => {
    const response = await fetch("/api/users/" + id);
    const user = await response.json();
    setName(user.name);
  }, [id]);

  return <h1>{name}</h1>;
}`,
  },
  {
    questionId: 19,
    question: `
import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    setForm({
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
      />
    </>
  );
}`,
  },
  {
    questionId: 20,
    question: `
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [posts]);

  return posts.map((post) => (
    <p key={post.id}>{post.title}</p>
  ));
}`,
  },
  {
    questionId: 21,
    question: `
import { createContext, useContext } from "react";

const ThemeContext = createContext();

function Header() {
  const theme = useContext(ThemeContext);

  return (
    <h1 style={{ color: theme.color }}>
      Dashboard
    </h1>
  );
}

export default function App() {
  return (
    <ThemeContext.Provider>
      <Header />
    </ThemeContext.Provider>
  );
}`,
  },
  {
    questionId: 22,
    question: `
import { memo } from "react";

const UserCard = memo(function UserCard({ user }) {
  return <p>{user.name}</p>;
});

export default function App() {
  return <UserCard user={{ name: "John" }} />;
}`,
  },
  {
    questionId: 23,
    question: `
import { useEffect } from "react";

export default function InfiniteScroll({ fetchMore }) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight
      ) {
        fetchMore();
      }
    });
  }, [fetchMore]);

  return <div>Products</div>;
}`,
  },
  {
    questionId: 24,
    question: `
import { useState } from "react";

export default function ImageGallery({ images }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.url}
          onClick={setSelected(image)}
          alt={image.name}
        />
      ))}
      <p>{selected?.name}</p>
    </>
  );
}`,
  },
  {
    questionId: 25,
    question: `
import { useEffect, useState } from "react";

export default function DataLoader() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json)
      .then(setData);
  }, []);

  return <pre>{JSON.stringify(data)}</pre>;
}`,
  },
  {
    questionId: 26,
    question: `
export default function Comment({ comment }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: comment }}
    />
  );
}`,
  },
  {
    questionId: 27,
    question: `
import { useState } from "react";

export default function PasswordForm() {
  const [password, setPassword] = useState("");

  return (
    <form>
      <input
        type="text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}`,
  },
  {
    questionId: 28,
    question: `
import { useEffect, useState } from "react";

export default function OnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", setOnline(true));
    window.addEventListener("offline", setOnline(false));
  }, []);

  return <p>{online ? "Online" : "Offline"}</p>;
}`,
  },
  {
    questionId: 29,
    question: `
import { useEffect, useState } from "react";

export default function WorkerExample() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const worker = new Worker("/worker.js");

    worker.onmessage = (event) => {
      setResult(event.data);
    };

    worker.postMessage("start");
  }, []);

  return <p>{result}</p>;
}`,
  },
  {
    questionId: 30,
    question: `
import { useState } from "react";

export default function Preferences() {
  const [settings, setSettings] = useState(
    JSON.parse(localStorage.getItem("settings"))
  );

  return <p>{settings.theme}</p>;
}`,
  },
  {
    questionId: 31,
    question: `
export default function LoginForm() {
  const handleSubmit = () => {
    fetch("/api/login", {
      method: "POST",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Log in</button>
    </form>
  );
}`,
  },
  {
    questionId: 32,
    question: `
import { useEffect, useState } from "react";

export default function ProtectedPage() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthenticated(Boolean(token));
  });

  return authenticated ? <Dashboard /> : <Login />;
}`,
  },
  {
    questionId: 33,
    question: `
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await login();

    if (success) {
      navigate = "/dashboard";
    }
  };

  return <button onClick={handleLogin}>Log in</button>;
}`,
  },
  {
    questionId: 34,
    question: `
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function User({ id }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [id]);

  return <div>User profile</div>;
}`,
  },
  {
    questionId: 35,
    question: `
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => {
    return {
      name: state.user.name,
      email: state.user.email,
    };
  });

  return <p>{user.name}</p>;
}`,
  },
  {
    questionId: 36,
    question: `
import { useMemo } from "react";

export default function ProductList({ products, query }) {
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.includes(query)
    );
  }, [products]);

  return filteredProducts.map((product) => (
    <p key={product.id}>{product.name}</p>
  ));
}`,
  },
  {
    questionId: 37,
    question: `
import { useCallback, useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(() => {
    setTodos([
      ...todos,
      { id: Date.now(), text: "New todo" },
    ]);
  }, []);

  return <button onClick={addTodo}>Add todo</button>;
}`,
  },
  {
    questionId: 38,
    question: `
import { useLayoutEffect, useRef, useState } from "react";

export default function Box() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    setHeight(rect.height);
  });

  return <div ref={ref}>Height: {height}</div>;
}`,
  },
  {
    questionId: 39,
    question: `
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "increment") {
    state.count++;
    return state;
  }

  return state;
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <button
      onClick={() => dispatch({ type: "increment" })}
    >
      {state.count}
    </button>
  );
}`,
  },
  {
    questionId: 40,
    question: `
import React from "react";

class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
`,
  },
  {
    questionId: 41,
    question: `
import { Suspense } from "react";

async function Profile() {
  const response = await fetch("/api/profile");
  const profile = await response.json();

  return <h1>{profile.name}</h1>;
}

export default function App() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Profile />
    </Suspense>
  );
}`,
  },
  {
    questionId: 42,
    question: `
export default function Clock() {
  return (
    <div>
      Current time: {new Date().toLocaleTimeString()}
    </div>
  );
}
`,
  },
  {
    questionId: 43,
    question: `
import { Navigate } from "react-router-dom";

export default function PrivateRoute({
  authenticated,
  children,
}) {
  if (!authenticated) {
    <Navigate to="/login" replace />;
  }

  return children;
}`,
  },
  {
    questionId: 44,
    question: `
import { useQuery } from "@apollo/client";

export default function User({ userId }) {
  const { data, loading } = useQuery(GET_USER);

  if (loading) {
    return <p>Loading</p>;
  }

  return <p>{data.user.name}</p>;
}`,
  },
  {
    questionId: 45,
    question: `
import { useEffect } from "react";
import { useApolloClient } from "@apollo/client";

export default function LogoutButton() {
  const client = useApolloClient();

  useEffect(() => {
    client.clearStore();
  }, [client]);

  return <button>Log out</button>;
}`,
  },
  {
    questionId: 46,
    question: `
import { useQuery } from "@tanstack/react-query";

export default function Todos({ status }) {
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(status),
  });

  return data?.map((todo) => (
    <p key={todo.id}>{todo.title}</p>
  ));
}`,
  },
  {
    questionId: 47,
    question: `
import useSWR from "swr";

export default function User({ id }) {
  const { data, error } = useSWR(
    "/api/users/" + id,
    fetch("/api/users/" + id)
  );

  if (error) {
    return <p>Error</p>;
  }

  if (!data) {
    return <p>Loading</p>;
  }

  return <p>{data.name}</p>;
}`,
  },
  {
    questionId: 48,
    question: `
import { useEffect, useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onmessage = (event) => {
      setMessages([...messages, event.data]);
    };

    return () => socket.close();
  }, []);

  return messages.map((message) => (
    <p>{message}</p>
  ));
}`,
  },
  {
    questionId: 49,
    question: `
import { useEffect, useRef } from "react";

export default function VideoCall() {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.src = stream;
      });
  }, []);

  return <video ref={videoRef} autoPlay />;
}`,
  },
  {
    questionId: 50,
    question: `
import { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef();

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.fillStyle = "blue";
    context.fillRect(10, 10, 100, 100);
  }, [canvasRef.current]);

  return <canvas ref={canvasRef} />;
}`,
  },
  {
    questionId: 51,
    question: `
import { useEffect, useRef } from "react";

export default function Animation() {
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      console.log("Animating");
      frameRef.current = requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <div>Animation</div>;
}`,
  },
  {
    questionId: 52,
    question: `
export default function IconButton() {
  return (
    <button onClick={() => alert("Deleted")}>
      <svg width="20" height="20">
        <path d="M3 3 L17 17 M17 3 L3 17" />
      </svg>
    </button>
  );
}`,
  },
  {
    questionId: 53,
    question: `
export default function ProductGrid({ products }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr",
      }}
    >
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}`,
  },
  {
    questionId: 54,
    question: `
export default function CenteredModal({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
}`,
  },
  {
    questionId: 55,
    question: `
import { useEffect, useRef } from "react";

export default function ShadowCard() {
  const hostRef = useRef(null);

  useEffect(() => {
    const shadow = hostRef.current.attachShadow({
      mode: "open",
    });

    shadow.innerHTML = "<p>Shadow content</p>";
  });

  return <div ref={hostRef} />;
}`,
  },
  {
    questionId: 56,
    question: `
import DOMPurify from "dompurify";
import { useMemo } from "react";

export default function Article({ html }) {
  const cleanHTML = useMemo(() => {
    return DOMPurify.sanitize(html);
  }, []);

  return (
    <article
      dangerouslySetInnerHTML={{ __html: cleanHTML }}
    />
  );
}`,
  },
  {
    questionId: 57,
    question: `
import { useState } from "react";

function Child({ config }) {
  return <p>{config.theme}</p>;
}

export default function Parent() {
  const [count, setCount] = useState(0);
  const config = Object.freeze({ theme: "dark" });

  config.theme = "light";

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <Child config={config} />
    </>
  );
}`,
  },
];
