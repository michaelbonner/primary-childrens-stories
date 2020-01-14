import { useRouter } from "next/router";
import useContentfulContent from "../../shared/hooks/useContentfulContent";
import { useEffect, useState } from "react";
import StoryOverlay from "../../components/story-overlay";

const Story = () => {
  const contentfulContent = useContentfulContent();
  const router = useRouter();
  const { entryId } = router.query;
  const [story, setStory] = useState(false);

  useEffect(() => {
    contentfulContent.fetchByEntryId(entryId).then(story => setStory(story));
  }, []);

  return (
    <div>
      <StoryOverlay activeStory={story} />
    </div>
  );
};

export default Story;
