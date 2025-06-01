"use client";

import { useEffect, useState } from "react";

const QuestionCard = () => (
  <div className="p-6 text-white">
    <h2 className="text-xl font-bold mb-2">🟠 Question 4: Tabs Component</h2>

    <div className="mb-4">
      <span className="font-semibold">Objective:</span> Build a{" "}
      <code className="bg-black px-1 rounded">&lt;Tabs /&gt;</code> component
      that lets users switch between different content panels.
    </div>

    <div className="mb-4">
      <p className="font-semibold mb-1">Requirements:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Render tab buttons (e.g., "Home", "Profile", "Settings")</li>
        <li>Clicking a tab should display its associated content</li>
        <li>Active tab should be visually highlighted</li>
        <li>
          Use <code>useState</code> to manage which tab is active
        </li>
      </ul>
    </div>

    <div>
      <p className="font-semibold mb-1">Bonus:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Accept tabs and content as a prop array:
          <pre className="bg-black p-2 rounded text-sm mt-1">
            {`type Tab = {
    label: string;
    content: React.ReactNode;
  };`}
          </pre>
        </li>
        <li>
          Make it reusable:{" "}
          <code>&lt;Tabs tabs=&#123;tabArray&#125; /&gt;</code>
        </li>
        <li>Add keyboard support (←/→ arrow keys to switch tabs)</li>
      </ul>
    </div>
  </div>
);

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs = ({ tabs }: TabsProps) => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentTab((c) => {
          const index = tabs.findIndex((t) => t.label === c.label);
          if (index !== 0) {
            return tabs[index - 1];
          }
          return c;
        });
      } else if (e.key === "ArrowRight") {
        setCurrentTab((c) => {
          const index = tabs.findIndex((t) => t.label === c.label);
          if (index !== tabs.length - 1) {
            return tabs[index + 1];
          }
          return c;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex">
        {tabs.map((t) => (
          <div key={t.label}>
            <button
              onClick={() => setCurrentTab(t)}
              className={`border w-[90px] border-b-0 p-2 ${
                currentTab.label !== t.label ? "bg-gray-400" : "bg-gray-800"
              }`}
            >
              {t.label}
            </button>
          </div>
        ))}
      </div>
      <div className="my-4 text-center">{currentTab.content}</div>
    </div>
  );
};

export default function TabsPage() {
  return (
    <div className="w-full h-dvh bg-gray-800">
      <QuestionCard />
      <div className="my-4 w-full flex justify-center">
        <Tabs
          tabs={[
            { label: "Home", content: <p>This is the Home component</p> },
            { label: "Profile", content: <p>This is the Profile component</p> },
            {
              label: "Settings",
              content: <p>This is the Settings component</p>,
            },
          ]}
        />
      </div>
    </div>
  );
}
