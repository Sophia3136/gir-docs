---
title: Создание объявления
sidebar_position: 1
---

# Бизнес процесс
описание бизнес-процесса 

## Схема интеграции

```plantuml
@startuml
  !pragma teoz true
  boundary "ЛК Бизнес-клиента" as client
  participant "Бэк-сервисы" as system
  boundary "ЛК Модератора" as moderator
    participant "Поддержка ИС" as support

  activate client
  {start} client ->> system: Отправить заявку на публикацию объявления
  deactivate client
  activate system

  system -> system: Проверить срок действия договра
  alt Срок действия договора закончился
    system ->> client: Отправить уведомление об отказе публикации объявления\n по причине недействительного договора
  else  Договор действителен
    system ->> moderator: Отправить уведомление о новой заявке\n на публикацию объявления с данными о нем
    note right
      t= now()
    end note
    deactivate system
    activate moderator
    moderator ->> moderator: Проверить объявление\n на соответсвие правилам площадки\n{t..8ч}

    alt Объявление НЕ соответсвует правила площадки
      activate system
      moderator ->> system: Отправить данные о причине отказа
      system ->> client: Отправить уведомление об отказе в публикации с данными о причине отказа
      deactivate system
      
    else Объявление соответсвует правилам площадки      
      moderator ->> system: Подтвердить разрешение к публикации
      deactivate moderator
      activate system
      system -> system: Опубликовать объявление

      alt Публикация прошла успешно
        system ->> client: Отправить уведомление об успешной публикации
        system ->> moderator: Отправить уведомление об успешной публикации
      else При публикации возникли ошибки
        system ->> client: Отправить уведомление об ошибке при публикации\nс контактной информацией
        system ->> support: Отправить уведомление об ошибке при публикации        
        deactivate system
        |||
      end
    end
  end 
@enduml
```
## Описание участников процесса
табличка с указанием участника и его описание

## Описание технологий, используемых при реализации данной интеграции