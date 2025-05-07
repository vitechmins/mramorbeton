"use client"
import { Descriptions, Badge, Space } from 'antd'
import { useScreens } from '@/constans/constants'

const DescriptionsContactComp = () => {
	const screens = useScreens()

	return (
		<Descriptions
			style={screens.xs ? { paddingLeft: '.5em' } : undefined}
			title="Контактные данные"
			layout="vertical"
			column={1}
			bordered={false}
			labelStyle={{ fontWeight: "bold" }}
		>
			<Descriptions.Item label="Наименование">
				ИП Хальчицкий Илья Михайлович
			</Descriptions.Item>
			<Descriptions.Item label="Адрес">
				Республика Беларусь<br />
				Минская область<br />
				Минский район, Хатежинский сельский совет<br />
				д.Васьковщина<br />
				Координаты: 53.861927, 27.318767<br />
				Гродненское направление,12км от МКАД
			</Descriptions.Item>
			<Descriptions.Item label="Время работы">
				<Space direction="vertical">
					<Badge status="success" text="Пн: 9:00-22:00" />
					<Badge status="success" text="Вт: 9:00-22:00" />
					<Badge status="success" text="Ср: 9:00-22:00" />
					<Badge status="success" text="Чт: 9:00-22:00" />
					<Badge status="success" text="Пт: 9:00-22:00" />
					<Badge status="success" text="Сб: 9:00-22:00" />
					<Badge status="success" text="Вс: 9:00-22:00" />

				</Space>
			</Descriptions.Item>
			<Descriptions.Item label="Телефон">
				<a href='tel:80293258259 ' className=''>
					+375 29 325-82-59
				</a>
			</Descriptions.Item>
			<Descriptions.Item label="Почта">
				Ilya-khalchitski@mail.ru
			</Descriptions.Item>
		</Descriptions>
	)
}
export default DescriptionsContactComp