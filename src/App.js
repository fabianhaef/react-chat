import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css'

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="ae1b1a06-35a5-4c79-bf05-37a938c0db3f"
            userName="FabianHaef"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;