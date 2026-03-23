import React from "react";

// Define types for Props and State
interface ClassComponentExampleProps {
  initialCount?: number; // optional prop
}

interface ClassComponentExampleState {
  count: number;
}

class ClassComponentExample extends React.Component<
  ClassComponentExampleProps,
  ClassComponentExampleState
> {
  constructor(props: ClassComponentExampleProps) {
    super(props);
    this.state = {
      count:  0, // fallback to 0 if not provided
    };
    console.log("Constructor: Component is being created");
  }

  componentDidMount(): void {
    console.log("componentDidMount: Component mounted");
    // Example: API call or setting up subscriptions
  }

  componentDidUpdate(
    prevProps: Readonly<ClassComponentExampleProps>,
    prevState: Readonly<ClassComponentExampleState>
  ): void {

    if (prevState.count !== this.state.count) {
      console.log("componentDidUpdate: Count changed");
    }
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount: Cleanup before component is removed");
    // Example: Remove event listeners, clear intervals
  }

  render() {
    return (
      <div>
        <h2>Class Component (TypeScript)</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default ClassComponentExample;
