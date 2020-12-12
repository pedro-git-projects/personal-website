import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'skilltype', label: 'Skill Type', minWidth: 170 },
  { id: 'skillname', label: 'Skill Name', minWidth: 100 },
  {
    id: 'skilllevel',
    label: 'Skill Level',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(skilltype, skillname, skilllevel) {
  
  return { skilltype, skillname, skilllevel };
}

const rows = [
  createData('Technology', 'Git', 'Excellent'),
  createData('Technology', 'NPM', 'Excellent'),
  createData('Technology', 'Yarn', 'Excellent'),
  createData('Technology', 'pip', 'Moderate'),
  createData('Programming Language', 'JavaScript', 'Excellent'),
  createData('Programming Language', 'JavaScript XML', 'Moderate'),
  createData('Programming Language', 'Scheme', 'Moderate'),
  createData('Programming Language', 'Haskell', 'Begginer'),
  createData('Japan', 'JP', 126317000),
  createData('France', 'FR', 67022000),
  createData('United Kingdom', 'GB', 67545757),
  createData('Russia', 'RU', 146793744),
  createData('Nigeria', 'NG', 200962417),
  createData('Brazil', 'BR', 210147125),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function Curriculum() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.skillname}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
