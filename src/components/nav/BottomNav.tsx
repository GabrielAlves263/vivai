export default function BottomNav() {
  return (
    <div className="fixed bottom-0 w-full flex justify-around p-4">
      <img src="userIcon.svg" className="h-14 opacity-50" />
      <img src="homeIcon.svg" className="h-14 text-blue-500" />
      <img src="settingsIcon.svg" className="h-14 opacity-50" />
    </div>
  );
}
