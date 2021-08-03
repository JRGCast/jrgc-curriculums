const TableGenerator = ({ title, content }) => {
  const thGen = title.forEach(tHeader => <th>{ tHeader }</th>);
  const tdGen = content.forEach(tCell => <td>{ tCell }</td>);
  return (
    <table>
      <tr>{ thGen() }</tr>
      <tr>{ tdGen() }</tr>
    </table>);
};

export default TableGenerator;
