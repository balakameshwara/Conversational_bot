import os
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage, AIMessage, SystemMessage

def get_chat_response(message: str, history: list) -> str:
    """
    Generate a response using LangChain and ChatOpenAI.
    """
    llm = ChatOpenAI(
        model="gpt-3.5-turbo", # You can upgrade to gpt-4 or gpt-4o as needed
        temperature=0.7,
        openai_api_key=os.getenv("OPENAI_API_KEY")
    )
    
    # We set up a friendly persona:
    messages = [
        SystemMessage(content=(
            "You are a friendly, enthusiastic, and polite AI conversational bot. "
            "Your goal is to provide helpful and engaging responses while maintaining "
            "a warm tone."
        ))
    ]
    
    # Convert incoming history into LangChain message objects
    for turn in history:
        role = turn.get("role")
        content = turn.get("content")
        if role == "user":
            messages.append(HumanMessage(content=content))
        elif role == "assistant":
            messages.append(AIMessage(content=content))
            
    # Add the current message
    messages.append(HumanMessage(content=message))
    
    response = llm.invoke(messages)
    return response.content
