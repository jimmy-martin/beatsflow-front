interface ToastProps {
  message: string
}

export default function Toast({ message }: ToastProps) {
  return (
    <div className="toast toast-end toast-end">
      <div className="bg-beatsflow-light-green text-black rounded-xl p-3.5">
        <span>{message}</span>
      </div>
    </div>
  )
}
