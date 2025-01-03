---
title: ERD
sidebar_position: 1
---

# Модель данных

import Drawio from '@theme/Drawio'
import diagram from '!!raw-loader!./erd.drawio';

<Drawio content={diagram} editable={false} />


## Описание сущностей

### Объявления
| Атрибут | Тип     | Описание              |  Обязательность |
| -------- | ------- | --------------------- | ------------- |
| id |	текстовый |	Идентификатор объявления |	да |
| images |	текстовый массив |	Список url изображений |	да
| startDate	| дата |	Дата начала события |	нет |
| endDate |	дата |	Дата окончания события |	нет |
| advertStartDate |	дата |	Дата старта активности объявления |	да|
| advertEndDate |	дата |	Дата окончания активности объявления |	да|
| createDate |	дата |	Дата создания объявления |	да|
| registrationLink |	текстовый	|Ссылка для регистрации на событие/переход на сайт бизнес-аккаунта |	да|
| description |	текстовый	| Описание объявления |	да|
| tags |	текстовый массив |	Категория объявления (тэги)	| да|
| online |	логический | Признак проведения события - online|offline |	да|
| address |	текстовый |	Адрес объявления |	нет|
