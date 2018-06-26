const filterFields = [
    {
      key: 'from',
      type: 'input',
      templateOptions: {
        type: 'input',
        label: 'From:',
        placeholder: 'yyyy-mm-dd'
      }
    },
    {
      key: 'to',
      type: 'input',
      templateOptions: {
        type: 'input',
        label: 'To:',
        placeholder: 'yyyy-mm-dd'
      }
    },
    {
      key: 'status',
      type: 'select',
      templateOptions: {
        "label": "Status",
        "options": [
          { "name": "Pending", "value": "pending" },
          { "name": "Live", "value": "live" },
          { "name": "Archived", "value": "archived" },
        ]
      }}
  ]
  
  const tileFields = [
    {
      key: 'launch',
      type: 'input',
      templateOptions: {
        type: 'input',
        label: 'Launch',
        placeholder: 'yyyy-mm-dd'
      }
    },
    {
      key: 'status',
      type: 'select',
      templateOptions: {
        "label": "Status",
        "options": [
          { "name": "Pending", "value": "pending" },
          { "name": "Live", "value": "live" },
          { "name": "Archived", "value": "archived" },
        ]
      }
    }]
  
  const taskFields = [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        type: 'input',
        label: 'Title',
        placeholder: 'Enter task title'
      }
    },
    {
      key: 'body',
      type: 'textarea',
      templateOptions: {
        label: 'Body',
        placeholder: 'Enter task body'
      }
    },
    {
      key: 'type',
      type: 'input',
      templateOptions: {
        label: 'Type',
        placeholder: 'Enter task type'
      }
    },
    {
      key: 'order',
      type: 'input',
      templateOptions: {
        label: 'Order',
        placeholder: 'Enter a number'
      }
    },
  ]
  
  