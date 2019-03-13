import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { format } from 'date-fns';
import styled from 'styled-components';

const PagePaper = styled(Paper)`
  margin: auto;
  padding-bottom: 2em;
  max-width: 30em;
`;

const PaperContainer = styled.div`
  max-width: 25em;
  margin: auto;
  margin-top: 3em;
  padding-top: 2em;
`;

export default (data) =>
  <PagePaper elevation={1}>
    <PaperContainer>
      <Typography variant="h5" component="h3">
        Coignity Price Ticker: BTC/USD
      </Typography>
      <Table style={{marginTop: '1em'}}>
        <TableHead>
          <TableRow>
            <TableCell>Parameter</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>request</TableCell>
            <TableCell>{format(new Date(), 'YYYY-MM-DD hh:mm:ss')}</TableCell>
          </TableRow>
          {Object.entries(data.data).map((entry, i) =>
            <TableRow key={i}>
              <TableCell>{entry[0]}</TableCell>
              <TableCell>{entry[1]}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </PaperContainer>
  </PagePaper>;
