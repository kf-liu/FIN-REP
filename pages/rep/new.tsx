import { Table } from 'antd'

export default () => {
    return <div>
        <Table
            dataSource={[{}, {}, {}, {}]}
            columns={[{ dataIndex: '1', title: '11' }]}
        />
    </div>
}