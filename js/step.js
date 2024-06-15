document.querySelectorAll('input[name="flavor"]').forEach(input => {
            input.addEventListener('change', () => {
                const flavor = input.value === 'blackSugar' ? '黑糖/咖啡' : '水果風味';
                document.getElementById('step2').classList.add('visible');
                document.getElementById('step2').classList.remove('hidden');
                updateHeatingInstruction();
            });
        });

        document.querySelectorAll('input[name="heating"]').forEach(input => {
            input.addEventListener('change', () => {
                updateHeatingInstruction();
                document.getElementById('step3').classList.add('visible');
                document.getElementById('step3').classList.remove('hidden');
            });
        });

        document.querySelectorAll('input[name="base"]').forEach(input => {
            input.addEventListener('change', () => {
                const base = input.value;
                const instruction = base === 'milk' ? '加入200g冰塊與150ml鮮奶\n攪拌均勻即可享用' : '加入200g冰塊後倒入150ml氣泡水\n攪拌均勻即可享用';
                document.getElementById('baseAnswer').innerText = instruction;
                document.getElementById('step4').classList.add('visible');
                document.getElementById('step4').classList.remove('hidden');
            });
        });

        function updateHeatingInstruction() {
            const flavor = document.querySelector('input[name="flavor"]:checked').value;
            const heating = document.querySelector('input[name="heating"]:checked');
            let instruction = '';

            if (heating) {
                if (heating.value === 'microwave') {
                    instruction = flavor === 'blackSugar' ? '不需解凍700w加熱90秒\n待包裝透氣10秒取出' : '不需解凍700w加熱75秒\n待包裝透氣10秒取出';
                } else {
                    instruction = '90度以上的水浸泡加熱3分鐘\n呈現液體狀態即可倒出';
                }

                document.getElementById('heatingAnswer').innerText = instruction;
            }
        }