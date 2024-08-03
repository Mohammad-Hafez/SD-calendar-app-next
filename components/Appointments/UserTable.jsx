'use client'

import React from 'react';
import { Table, Input } from 'antd';

const UserTable = ({ filteredUsers, onUserSelect, searchTerm, onSearchChange }) => {
    const columns = [
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a onClick={() => onUserSelect(text)}>{text}</a>,
        },
    ];

    const userTableData = filteredUsers.map((user, index) => ({
        key: index,
        name: user,
    }));

    return (
        <div className="p-4 bg-white rounded shadow">
            <h1 className="text-xl font-semibold mb-4">Users</h1>
            <Input
                placeholder="Search users"
                value={searchTerm}
                onChange={onSearchChange}
                className="mb-4"
            />
            <Table
                columns={columns}
                dataSource={userTableData}
                pagination={false}
            />
        </div>
    );
};

export default UserTable;