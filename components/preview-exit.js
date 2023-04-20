import Link from "next/link";

function PreviewBanner() {
  return (
    <div className="preview-control">
      <span>PERVIEW MODE ENABLED</span>
        <Link href="/api/cancel-preview" className="btn btn-primary">EXIT PREVIEW MODE</Link>
    </div>
  );
}

export default PreviewBanner;
