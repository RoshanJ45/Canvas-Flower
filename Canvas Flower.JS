    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Draw a unique flower-like shape
    const centerX = 100;
    const centerY = 100;
    const radius = 60;
    ctx.fillStyle = "#ff6f61";
    for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        const angle = (Math.PI / 4) * i;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius; // Fix: centery -> centerY
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.fill();
    }

    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, 0, Math.PI * 2); // Fix: centery -> centerY
    ctx.fillStyle = "#ffd700";
    ctx.fill();
