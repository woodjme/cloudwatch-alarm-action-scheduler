# cloudwatch-alarm-action-scheduler

A simple set of lambda functions that run on a CRON expression to disable and enable CloudWatch alarms actions.

## Why

Initially, I wrote this to avoid [Alarm Fatigue](https://www.google.com/search?client=safari&rls=en&q=Alert+Fatigue&ie=UTF-8&oe=UTF-8) such that non-critical alarms would not alert people in non-working hours.

## Usage

- Open `./config/dev.yml`
- Edit the enable and disable schedules based on your needs. [AWS Cron Rules](https://www.google.com/search?client=safari&rls=en&q=aws+cron+scheudle&ie=UTF-8&oe=UTF-8)
- Edit the alarm **names** with the names of your CloudWatch alarms. *Must be names not ARNs*
- `serverless deploy`
