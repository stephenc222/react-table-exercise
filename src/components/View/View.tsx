import React from 'react';
import Table, { RowProps } from '../Table/Table';

interface ViewProps {
  loading: boolean;
  data: {};
  error: string;
}

const KEY_ORDER = [
  { keyName: 'name', keyPath: 'name' },
  { keyName: 'email', keyPath: 'email' },
  { keyName: 'city', keyPath: 'address.city' },
  { keyName: 'company', keyPath: 'company.name' }
];

const View = (props: ViewProps) => {
  const { error, loading, data } = props;
  if (error) {
    return <div>Something went wrong, please refresh the page</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Table keyOrder={KEY_ORDER} tableData={data as RowProps[]} />
    </div>
  );
};

export default View;
