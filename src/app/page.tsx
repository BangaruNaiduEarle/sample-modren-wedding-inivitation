"use client";

import { ExperienceShell, SceneChapter } from "@/experience";
import { CelebrationsExperience } from "@/scenes/celebrations";
import { InvitationExperience } from "@/scenes/invitation";
import { JourneyExperience } from "@/scenes/journey";
import { LocationExperience } from "@/scenes/location";
import { MemoriesExperience } from "@/scenes/memories";
import { MuhurthamExperience } from "@/scenes/muhurtham";
import { WishesExperience } from "@/scenes/wishes";

export default function Home() {
  return (
    <ExperienceShell>
      <SceneChapter chapterIndex={0}>
        <InvitationExperience />
      </SceneChapter>
      <SceneChapter chapterIndex={1}>
        <JourneyExperience />
      </SceneChapter>
      <SceneChapter chapterIndex={2}>
         <MuhurthamExperience />
          </SceneChapter>
      <SceneChapter chapterIndex={3}>
        <CelebrationsExperience />
      </SceneChapter>
      <SceneChapter chapterIndex={4}>
        <MemoriesExperience />
      </SceneChapter>
      <SceneChapter chapterIndex={5}>
        <WishesExperience />
      </SceneChapter>
      <SceneChapter chapterIndex={6}>
        <LocationExperience />
      </SceneChapter>
    </ExperienceShell>
  );
}
