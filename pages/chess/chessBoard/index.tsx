export default function ChessBoard() {
  type boardProps = {
    colNum: number;
  };
  const BoardCol = ({ colNum }: boardProps): JSX.Element => {
    const BoardRow = (props: any) => {
      return (
        <li id={colNum + String.fromCharCode(props.rowNum + 64)}>
          <span>{colNum + String.fromCharCode(props.rowNum + 64)}</span>
          <div></div>
        </li>
      );
    };
    return (
      <ol id={"col-" + String(colNum)}>
        <BoardRow rowNum={1} />
        <BoardRow rowNum={2} />
        <BoardRow rowNum={3} />
        <BoardRow rowNum={4} />
        <BoardRow rowNum={5} />
        <BoardRow rowNum={6} />
        <BoardRow rowNum={7} />
        <BoardRow rowNum={8} />
      </ol>
    );
  };
  return (
    <div className="board-wrap">
      <BoardCol colNum={8} />
      <BoardCol colNum={7} />
      <BoardCol colNum={6} />
      <BoardCol colNum={5} />
      <BoardCol colNum={4} />
      <BoardCol colNum={3} />
      <BoardCol colNum={2} />
      <BoardCol colNum={1} />
    </div>
  );
}
