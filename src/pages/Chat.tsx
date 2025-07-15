import { useState } from "react";
import { Menu, Plus, Sun, Moon, Search, Mic } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const Chat = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ id: string; text: string; isUser: boolean }>>([]);
  const [inputValue, setInputValue] = useState("");
  const { theme, setTheme } = useTheme();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        text: "I'm an AI assistant, so I don't have feelings or a personal state of being like humans do. However, I'm ready and available to help you!\n\nHow can I assist you today?",
        isUser: false,
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  // Dummy chat history
  const chatHistory = [
    "Node.js में API बनाना आसान?",
    "Same.new Website: Free?",
    "Frontend Interview Prep Top...",
    "Haire.ai: AI Recruitment Pla...",
    "Research Plan Ready, Updat...",
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
            <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-sidebar-accent transition-colors">
              <Plus className="w-5 h-5 text-sidebar-foreground" />
              <span className="text-sidebar-foreground">New chat</span>
            </button>
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
                {chatHistory.map((chat, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-3 rounded-lg hover:bg-sidebar-accent transition-colors text-sidebar-foreground text-sm"
                  >
                    {chat}
                  </button>
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

      {/* Main Chat Area */}
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
                <h1 className="font-semibold">Gemini</h1>
                <p className="text-xs text-muted-foreground">2.5 Flash</p>
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

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-normal mb-4">
                Meet Gemini,<br />
                your personal AI assistant
              </h2>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-6">
              {messages.map((message) => (
                <div key={message.id} className="flex items-start space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.isUser ? 'bg-primary' : 'bg-muted'
                  }`}>
                    {message.isUser ? (
                      <span className="text-primary-foreground font-bold text-sm">U</span>
                    ) : (
                      <span className="text-muted-foreground font-bold text-sm">G</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSendMessage} className="relative">
              <div className="flex items-center bg-chat-input-bg rounded-full border border-border px-4 py-3">
                <button type="button" className="p-2 rounded-full hover:bg-accent transition-colors">
                  <Plus className="w-5 h-5 text-muted-foreground" />
                </button>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask Gemini"
                  className="flex-1 bg-transparent border-none outline-none px-4 text-foreground placeholder-muted-foreground"
                />
                <button type="button" className="p-2 rounded-full hover:bg-accent transition-colors">
                  <Mic className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </form>
            <p className="text-xs text-center text-muted-foreground mt-2">
              Gemini can make mistakes, so double-check it
            </p>
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

export default Chat;