import { useState } from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Introduction from './introduction';
import Components from './components';
import PropsAndState from './propsAndState';
import EventHandling from './event-handling';

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    onClick?: () => void,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        onClick,
    } as MenuItem;
}

export default function Dashboard() {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState('1');
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const items: MenuItem[] = [
        getItem('Lab 1', '1', undefined, () => setSelectedComponent('1')),
        getItem('Lab 2', '2', undefined, () => setSelectedComponent('2')),
        getItem('Lab 3', '3', undefined, () => setSelectedComponent('3')),
        getItem('Lab 4', '4', undefined, () => setSelectedComponent('4')),
    ];

    const renderComponent = () => {
        switch (selectedComponent) {
            case '1':
                return <Introduction />;
            case '2':
                return <Components />;
            case '3':
                return <PropsAndState />;
            case '4':
                return <EventHandling />;
            default:
                return <Introduction />;
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {renderComponent()}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}