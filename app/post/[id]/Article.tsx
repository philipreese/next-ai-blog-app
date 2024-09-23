import { Editor, EditorContent } from "@tiptap/react";
import EditorMenuBar from "./EditorMenuBar";

type Props = {
  contentError: string;
  editor: Editor | null;
  isEditable: boolean;
};
const Article = ({ contentError, editor, isEditable }: Props) => {
  if (!editor) {
    return null;
  }

  return (
    <article className="text-wh-500 leading-8">
      <div
        className={
          isEditable ? "border-2 rounded-md bg-wh-50 p-3" : "w-full max-w-full"
        }
      >
        {isEditable && (
          <>
            <EditorMenuBar editor={editor} />
            <hr className="border-1 mt-2 mb-5" />
            {contentError && (
              <p className="mt-1 text-accent-red">{contentError}</p>
            )}
          </>
        )}
        <EditorContent editor={editor} />
      </div>
    </article>
  );
};
export default Article;
