import React from 'react';
import styles from './BottomSheetTopBarLine.module.css';

interface Props {
  wrapperRef: React.RefObject<HTMLDivElement>;
  onDragBottom: () => void;
}

const BottomSheetTopBarLine: React.FC<Props> = ({
  wrapperRef,
  onDragBottom,
}: Props) => {
  return (
    <div
      className={styles.wrapper}
      onMouseDown={(e) => {
        if (wrapperRef.current) {
          const startMouseYLoc = e.clientY;
          const bottomSheetHeight =
            wrapperRef.current.getBoundingClientRect().height;
          let yDiff = 0;
          const moveEventCallback = (moveEv: MouseEvent) => {
            yDiff = moveEv.clientY - startMouseYLoc;
            wrapperRef.current &&
              (wrapperRef.current.style.transform = `translate(0,${yDiff}px)`);
          };
          document.addEventListener('mousemove', moveEventCallback);
          document.addEventListener('mouseup', function upEventCallback(upEv) {
            if (wrapperRef.current) {
              yDiff = upEv.clientY - startMouseYLoc;
              if (yDiff > 0) {
                if (yDiff > bottomSheetHeight / 2) {
                  onDragBottom();
                } else {
                  wrapperRef.current.style.transform = 'translate(0,0)';
                }
              } else {
                wrapperRef.current.style.transform = 'translate(0,0)';
              }
            }
            document.removeEventListener('mousemove', moveEventCallback);
            document.removeEventListener('mouseup', upEventCallback);
          });
        }
      }}
    >
      <div className={styles.line}></div>
    </div>
  );
};

export default BottomSheetTopBarLine;
