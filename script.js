// قائمة الفيديوهات المصححة
const videos = [
    {
        title: "براند عطور",
        videoUrl: "video/r.mp4",
        category: "Fashion & Beauty"
    },
    {
        title: "براند بسكويت",
        videoUrl: "video/n.mp4",
        category: "Commercial"
    },
    {
        title: "براند بسكويت",
        videoUrl: "video/f.mp4",
        category: "Commercial"
    },
    {
        title: "براند عطور",
        videoUrl: "video/p.mp4",
        category: "Commercial"
    },
    {
        title: "براند عطور",
        videoUrl: "video/black.mp4",
        category: "Commercial"
    },
    { 
        title: "براند عطور",
        videoUrl: "video/b.mp4",
        category: "Commercial"
    },
    { 
        title: "براند عطور",
        videoUrl: "video/t.mp4",
        category: "Commercial"
    },
    {
        title: "براند فخار",
        videoUrl: "video/y.mp4",
        category: "Commercial"
    },
    {
        title:"براند شموع",
        videoUrl: "video/a.mp4",
        category: "Commercial"
    },
    {   title:"مونتاج و فيديو لكابتن ف الجيم",
        videoUrl: "video/j.mp4",
        category: "Commercial"
    },
];

// كود برمجي لتوليد وعرض الفيديوهات تلقائياً على الموقع
const container = document.getElementById('videos-container');

videos.forEach(video => {
    const card = document.createElement('div');
    card.classList.add('video-card');
    
    card.innerHTML = `
        <video controls>
            <source src="${video.videoUrl}" type="video/mp4">
            متصفحك لا يدعم تشغيل الفيديو
        </video>
        <h3>${video.title}</h3>
        <span class="category">${video.category}</span>
    `;
    
    container.appendChild(card);
});