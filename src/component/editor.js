import { useState, useMemo } from "react";
// import "jodit";
// import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";

function TextEditor(props) {
  const [state, setState] = useState(props.data || "");
  const [buttons] = useState([
    "paragraph",
    "bold",
    "italic",
    "underline",
    "|",
    "align",
    "|",
    "ul",
    "ol",
  ]);
  const [editorConfig, setEditorConfig] = useState({
    readonly: props.readOnly ?? false,
    toolbar: true,
    spellcheck: true,
    language: "en",
    toolbarButtonSize: "medium",
    toolbarAdaptive: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    askBeforePasteHTML: true,
    askBeforePasteFromWord: true,
    buttons,
    uploader: {
      insertImageAsBase64URI: true,
    },
    height: "385px",
    maxHeight: "auto",
    width: "100%",
    overFlowY: "auto",
  });
  return (
    <div style={{ maxWidth: editorConfig.width }}>
      <JoditEditor
        ref={props.textEditorRef}
        editorRef={props.textEditorRef}
        value={props.data || ""}
        config={editorConfig}
        onChange={(value) => {
          props.setData(value)
        }}
        onBlur={() => {
          if (props.onClick) {
            props.onClick();
          } else {
            return null;
          }
        }}
      />
    </div>
  );
}
export default TextEditor;
