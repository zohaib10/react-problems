const QuestionCard = () => (
  <div className="p-6 text-white">
    <h2 className="text-xl font-bold mb-2">
      🟤 Question 7: Image Carousel with Comments
    </h2>

    <div className="mb-4">
      <span className="font-semibold">Objective:</span> Build a{" "}
      <code className="bg-black px-1 rounded">&lt;Carousel /&gt;</code>{" "}
      component that displays a series of images fetched from an API, and allows
      users to comment on each one.
    </div>

    <div className="mb-4">
      <p className="font-semibold mb-1">Requirements:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Fetch 10 images from{" "}
          <code>https://picsum.photos/v2/list?limit=10</code>.
        </li>
        <li>
          Display one image at a time with <strong>Next</strong> and{" "}
          <strong>Previous</strong> buttons.
        </li>
        <li>Show image index (e.g. "Image 3 of 10").</li>
        <li>Allow users to leave a comment per image.</li>
        <li>
          Use <code>useState</code> to manage image data and per-image comments.
        </li>
      </ul>
    </div>

    <div>
      <p className="font-semibold mb-1">Bonus:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Enable ←/→ keyboard navigation.</li>
        <li>Display existing comment below the image.</li>
        <li>Auto-save comment on blur or with a "Save" button.</li>
        <li>Add basic animation (fade or slide) when switching images.</li>
        <li>Disable "Previous" on the first image and "Next" on the last.</li>
      </ul>
    </div>
  </div>
);

export default function Question7() {
  return (
    <div className="w-full h-dvh">
      <QuestionCard />
    </div>
  );
}
