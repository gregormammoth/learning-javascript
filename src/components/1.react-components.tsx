export function MyButton() {
  return (
    <button data-testid='my-button'>Text</button>
  );
}

export function ButtonWithCustomText({ text }) {
  return (
    <button data-testid='button-with-custom-text'>My button</button>
  );
}

export function YesOrNoButtons() {
  return (
    <span>
      <span>
        Yes or No?
      </span>
      <span>
        <button>Yes</button>
        <button>No</button>
      </span>
    </span>
  )
}

export function Profile({ user }) {
  return (
    <>
      <h4>unknown</h4>
      <img
        className=""
        src="empty"
        alt="unknown"
        style={{}}
      />
    </>
  );
}
