import { SeasonArchive } from "@/components/vault/SeasonArchive";

export default function ArchivePage() {
  return (
    <div className="min-h-screen pt-20">
      <SeasonArchive />
      
      {/* Additional content could go here */}
      <div className="container mx-auto px-4 py-12 text-center text-muted-foreground">
        <p>Full archive database initializing...</p>
      </div>
    </div>
  );
}
