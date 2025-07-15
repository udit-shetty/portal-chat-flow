import { Link } from "react-router-dom";
import { MessageSquare, LayoutDashboard, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-2xl mx-auto p-8">
        <div className="mb-8">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Welcome to Gemini Clone
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Experience AI conversations with a beautiful, responsive interface
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            to="/chat"
            className="group p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-semibold mb-2 text-card-foreground">
              Start Chatting
            </h2>
            <p className="text-muted-foreground">
              Begin a new conversation with Gemini AI
            </p>
          </Link>

          <Link
            to="/dashboard"
            className="group p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <LayoutDashboard className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-semibold mb-2 text-card-foreground">
              View Dashboard
            </h2>
            <p className="text-muted-foreground">
              Browse your chat history and manage conversations
            </p>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-muted/50 rounded-xl">
          <h3 className="font-semibold mb-2 text-foreground">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Responsive design that works on all devices</li>
            <li>• Dark mode support (default)</li>
            <li>• Collapsible sidebar with chat history</li>
            <li>• Keyboard accessible interface</li>
            <li>• Smooth animations and transitions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
