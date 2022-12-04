import React from 'react'
import { Table } from 'antd'

const New = () => {
    return <div>
        <Table
            dataSource={[{}, {}, {}, {}]}
            columns={[{ dataIndex: '1', title: '11' }]}
        />
    </div>
}
export default New
