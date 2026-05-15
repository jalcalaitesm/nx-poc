export interface UiProps {
  label: string;
}

export function Ui({ label }: UiProps) {
  return (
    <button
      style={{
        padding: '10px 16px',
        border: 'none',
        borderRadius: '8px',
        background: '#2563eb',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
}

export default Ui;