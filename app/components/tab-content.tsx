import { useState } from "react";
import styles from "./tab-content.module.scss";

export default function TabContent({
  open,
  content,
}: {
  open: boolean;
  content: string;
}) {
  const [display, setDisplay] = useState("tab_content_close");
  const isOpen = open ? setDisplay("tab_content_open") : setDisplay("tab_content_close")

  return (
    <div className={display}>
      {content}
    </div>
  );
}
