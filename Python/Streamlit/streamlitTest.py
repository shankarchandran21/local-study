import streamlit as st

st.title("My first Streamlit App")
st.header("Welcome to the Demo App")
st.write("This is a simple app build with Streamlit")

name =st.text_input("What is your name")

if name :
    st.success(f"Hello, {name}")

age = st.slider("Select you age",1,100,25)
st.write("you selected:",age)