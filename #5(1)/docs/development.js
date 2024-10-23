const userGrowthChart = document.getElementById('userGrowthChart').getContext('2d');
new Chart(userGrowthChart, {
    type: 'line',
    data: {
        labels: ['9月23日', '9月26日', '9月29日', '10月2日', '10月5日', '10月8日', '10月11日', '10月14日', '10月17日','10月20日'],
        datasets: [{
            label: 'OpenJT用户量',
            data: [1.3,30.1,47.8,60.2,69.9,77.8,84.5,90.3,95.4,99.8],
            borderColor: '#0066cc',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: '用户量(万人）'
                }
            }
        }
    }
});

const performance = document.getElementById('performance').getContext('2d');
new Chart(performance, {
    type: 'bar',
    data: {
        labels: ['准确率', '召回率', 'F1-score', '精确率', '特异度'],
        datasets: [{
            label: 'JoTangLM的性能',
            data: [75.25,70.63,60.21,91.03,80.37],
            backgroundColor: '#0066cc'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: '性能指标（%）'
                }
            }
        }
    }
});
 