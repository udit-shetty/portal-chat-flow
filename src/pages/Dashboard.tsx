import { useState } from "react";
import { Menu, Plus, Sun, Moon, Search, MessageSquare, Clock } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // Dummy chat history with more details
  const chatHistory = [
    {
      id: "1",
      title: "Node.js में API बनाना आसान?",
      preview: "Node.js में RESTful API बनाने के लिए Express.js framework का उपयोग करना सबसे आसान तरीका है...",
      timestamp: "2 hours ago",
      messageCount: 8,
    },
    {
      id: "2", 
      title: "Same.new Website: Free?",
      preview: "Yes, Same.new offers a free tier with basic features. You can create simple websites without any cost...",
      timestamp: "5 hours ago",
      messageCount: 12,
    },
    {
      id: "3",
      title: "Frontend Interview Prep Topics",
      preview: "Here are the essential frontend interview topics: JavaScript fundamentals, React concepts, CSS...",
      timestamp: "1 day ago",
      messageCount: 25,
    },
    {
      id: "4",
      title: "Haire.ai: AI Recruitment Platform",
      preview: "Haire.ai is an AI-powered recruitment platform that helps companies find the right talent...",
      timestamp: "2 days ago",
      messageCount: 6,
    },
    {
      id: "5",
      title: "Research Plan Ready, Updates",
      preview: "I've prepared a comprehensive research plan for your project. Here are the key components...",
      timestamp: "3 days ago",
      messageCount: 15,
    },
    {
      id: "6",
      title: "React Hook Best Practices",
      preview: "Let me explain the best practices for using React hooks effectively in your applications...",
      timestamp: "1 week ago",
      messageCount: 18,
    },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:relative lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <div>
                <h1 className="font-semibold text-sidebar-foreground">Gemini</h1>
                <p className="text-xs text-sidebar-foreground/60">2.5 Flash</p>
              </div>
            </div>
          </div>

          {/* New Chat Button */}
          <div className="p-4">
            <Link 
              to="/chat"
              className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-sidebar-accent transition-colors"
            >
              <Plus className="w-5 h-5 text-sidebar-foreground" />
              <span className="text-sidebar-foreground">New chat</span>
            </Link>
            <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-sidebar-accent transition-colors mt-2">
              <Search className="w-5 h-5 text-sidebar-foreground" />
              <span className="text-sidebar-foreground">Explore Gems</span>
            </button>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <h3 className="text-sm font-medium text-sidebar-foreground/60 mb-4">Recent</h3>
              <div className="space-y-2">
                {chatHistory.slice(0, 5).map((chat) => (
                  <Link
                    key={chat.id}
                    to={`/chat/${chat.id}`}
                    className="block w-full text-left p-3 rounded-lg hover:bg-sidebar-accent transition-colors"
                  >
                    <div className="text-sidebar-foreground text-sm font-medium truncate">
                      {chat.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="p-4 border-t border-sidebar-border">
            <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-sidebar-accent transition-colors">
              <span className="text-sidebar-foreground">Settings and help</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Dashboard Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="flex items-center justify-between p-4 border-b border-border bg-background">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-accent transition-colors lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <div>
                <h1 className="font-semibold">Gemini Dashboard</h1>
                <p className="text-xs text-muted-foreground">Chat History</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">U</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Chat History</h1>
              <p className="text-muted-foreground">
                Browse through your previous conversations with Gemini
              </p>
            </div>

            {/* Chat History Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {chatHistory.map((chat) => (
                <Link
                  key={chat.id}
                  to={`/chat/${chat.id}`}
                  className="block p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <MessageSquare className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {chat.timestamp}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">
                    {chat.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {chat.preview}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {chat.messageCount} messages
                    </span>
                    <span className="text-xs text-primary hover:underline">
                      Continue →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-12 text-center">
              <Link
                to="/chat"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Start New Conversation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Dashboard;