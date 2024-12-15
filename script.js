const questions = [
    {
        question: "Câu 76: Đại hội Đại biểu toàn quốc lần thứ hai của Đảng họp tại đâu?",
        options: ["Bà Điểm – Hóc Môn – Gia Định", "Cao Bằng", "Tuyên Quang", "Bắc Ninh"],
        answer: 2
    },
    {
        question: "Câu 77: Tác phẩm “Kháng chiến nhất định thắng lợi\" do ai soạn thảo?",
        options: ["Trường Chinh", "Võ Nguyên Giáp", "Hồ Chí Minh", "Trần Phú"],
        answer: 0
    },
    {
        question: "Câu 78: Tại Đại hội đại biểu toàn quốc lần thứ hai, Đảng ta quyết định đổi tên thành:",
        options: ["Đảng Cộng sản Đông Dương", "Hội nghiên cứu Chủ nghĩa Mác", "Đảng Cộng sản Việt Nam", "Đảng Lao động Việt Nam"],
        answer: 3
    },
    {
        question: "Câu 79: Nước đầu tiên công nhận và đặt quan hệ ngoại giao với Chính phủ Việt Nam Dân chủ Cộng hòa là...",
        options: ["Liên Xô", "Cu ba", "Trung Quốc", "Lào"],
        answer: 2
    },
    {
        question: "Câu 80: Đại hội Đảng toàn quốc lần thứ hai của Đảng Lao động Việt Nam đã thông qua một văn kiện mang tính chất cương lĩnh. Đó là:",
        options: ["Cương lĩnh cách mạng Việt Nam", "Chính cương của Đảng Lao động Việt Nam", "Luận cương về cách mạng Việt Nam", "Cương lĩnh của Đảng Lao động Việt Nam"],
        answer: 1
    },
    {
        question: "Câu 81: Tài liệu nào dưới đây lần đầu tiên khẳng định sự nhân nhượng của nhân dân Việt Nam đối với thực dân Pháp xâm lược đã đến giới hạn cuối cùng?",
        options: [
            "Kháng chiến nhất định thắng lợi của Tổng Bí thư Trường Chinh",
            "Tuyên ngôn Độc lập của nước Việt Nam Dân chủ Cộng hòa",
            "Toàn dân kháng chiến của BTV Trung ương Đảng Cộng sản Đông Dương",
            "Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh"
        ],
        answer: 3 // D: Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh
    },
    {
        question: "Câu 82: Đường lối kháng chiến chống thực dân Pháp của Đảng KHÔNG được thể hiện văn kiện lịch sử nào dưới đây?",
        options: [
            "Chỉ thị Toàn dân kháng chiến",
            "Tác phẩm Kháng chiến nhất định thắng lợi",
            "Lời kêu gọi toàn quốc kháng chiến",
            "Tác phẩm “vấn đề dân cày"
        ],
        answer: 3
    },
    {
        question: "Câu 83: “Chúng ta thà hi sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ...\" là đoạn trích trong văn kiện nào?",
        options: [
            "Chỉ thị Toàn dân kháng chiến của Ban Thường vụ Trung ương Đảng",
            "Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh",
            "Tác phẩm Kháng chiến nhất định thắng lợi của Tổng Bí thư Trường Chinh",
            "Chỉ thị sửa soạn khởi nghĩa của Tổng bộ Việt Minh"
        ],
        answer: 1 // B: Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh
    },
    {
        question: "Câu 84: Chính cương Đảng Lao động Việt Nam tháng 2-1951 đã nêu ra các tính chất của xã hội Việt Nam:",
        options: [
            "Dân chủ nhân dân, một phần thuộc địa và nửa phong kiến",
            "Dân chủ và dân tộc",
            "Thuộc địa nửa phong kiến",
            "Dân tộc và dân chủ mới"
        ],
        answer: 0 // A: Dân chủ nhân dân, một phần thuộc địa và nửa phong kiến
    },
    {
        question: "Câu 85: Hai đối tượng của cách mạng Việt Nam được nêu ra tại Chính cương Đảng Lao động Việt Nam:",
        options: [
            "Đối tượng chính là chủ nghĩa đế quốc xâm lược, cụ thể là thực dân Pháp",
            "Đối tượng phụ là phong kiến, cụ thể là phong kiến phản động",
            "Thực dân Pháp và phong kiến phản động",
            "Đế quốc và phong kiến Việt Nam"
        ],
        answer: 2 // C: Thực dân Pháp và phong kiến phản động
    },
    {
        question: "Câu 86: Con đường đi lên chủ nghĩa xã hội được nêu ra tại Chính cương Đảng Lao động Việt Nam trải qua mấy giai đoạn?",
        options: [2, 3, 4, 5],
        answer: 1
    },
    {
        question: "Câu 87: Lực lượng tạo nên động lực cho cách mạng Việt Nam được nêu ra trong Chính cương Đảng Lao động Việt Nam:",
        options: [
            "Công nhân, nông dân, tiểu tư sản, tư sản dân tộc, địa chủ yêu nước (nhân dân)",
            "Công nhân, nông dân, lao động trí thức",
            "Công nhân, tri thức, tư sản dân tộc",
            "Nhân dân, địa chủ, tư sản dân tộc"
        ],
        answer: 0
    },
    {
        question: "Câu 88: Sau thất bại ở Việt Bắc thu – đông năm 1947, Pháp buộc phải chuyển từ “đánh nhanh, thắng nhanh” sang...",
        options: [
            "đánh thần tốc",
            "chắc thắng mới đánh",
            "đánh lâu dài",
            "vừa đánh vừa đàm phán"
        ],
        answer: 2 // C: đánh lâu dài
    },
    {
        question: "Câu 89: Chọn phương án đúng nhất: Đường lối kháng chiến chống thực dân Pháp của Đảng Cộng sản Đông Dương (1945-1954) là",
        options: [
            "toàn diện, tự lực cánh sinh và tranh thủ sự ủng hộ quốc tế",
            "trường kì, tự lực cánh sinh và tranh thủ sự ủng hộ quốc tế",
            "toàn dân, tự lực cánh sinh và tranh thủ sự ủng hộ quốc tế",
            "toàn dân, toàn diện, trường kì, tự lực cánh sinh và tranh thủ sự ủng hộ quốc tế"
        ],
        answer: 3
    },
    {
        question: "Câu 90: Thắng lợi của quân dân Việt Nam trong cuộc chiến đấu chống thực dân Pháp ở các đô thị phía Bắc vĩ tuyến 16 (từ tháng 12/1946 đến tháng 2/1947) đã...",
        options: [
            "làm thất bại ý chí xâm lược của thực dân Pháp",
            "làm phá sản kế hoạch “đánh nhanh thắng nhanh\" của thực dân Pháp",
            "mở ra bước phát triển lớn trong cuộc kháng chiến chống thực dân Pháp",
            "làm thất bại bước đầu kế hoạch “đánh nhanh thắng nhanh\" của Pháp"
        ],
        answer: 3 // D: làm thất bại bước đầu kế hoạch “đánh nhanh thắng nhanh\" của Pháp
    },
    {
        question: "Câu 91: Thực chất của chính sách dùng người Việt đánh người Việt, lấy chiến tranh nuôi chiến tranh của thực dân Pháp sau 1947 là gì?",
        options: [
            "tiến hành chiến tranh tổng lực",
            "Chuyển sang chiến lược đánh lâu dài",
            "tiến hành chiến tranh xâm lược kiểu mới",
            "tiến hành chiến tranh đánh nhanh thẳng nhanh"
        ],
        answer: 1 // B: Chuyển sang chiến lược đánh lâu dài
    },
    {
        question: "Câu 92: “Bất kì đàn ông, đàn bà, người già, người trẻ, không chia tôn giáo, đảng phái, dân tộc. Hễ là người Việt Nam thì phải đứng lên đánh thực dân Pháp để cứu Tổ quốc”. Đoạn trích trên trong “Lời kêu gọi toàn quốc kháng chiến\" đã thể hiện rõ tư tưởng...",
        options: [
            "kháng chiến toàn diện",
            "trường kì kháng chiến",
            "kháng chiến bất khuất",
            "kháng chiến trường kỳ lâu dài"
        ],
        answer: 2
    },
    {
        "question": "Câu 93: Lực lượng tạo nên động lực cho cách mạng Việt Nam được nêu ra trong Chính cương Đảng Lao Động Việt Nam là gì?",
        "options": [
            "Công nhân, nông dân, tiểu tư sản, tư sản dân tộc, địa chủ yêu nước (nhân dân)",
            "Công nhân, nông dân, lao động trí thức",
            "Công nhân, trí thức, tư sản dân tộc",
            "Nhân dân, địa chủ, tư sản dân tộc"
        ],
        "answer": 0
    },
    {
        "question": "Câu 94: Nền tảng của khối đại đoàn kết dân tộc được Đảng Lao Động Việt Nam xác định tại Đại hội II là gì?",
        "options": [
            "Công nhân và nông dân",
            "Công nhân, nông dân và tư sản dân tộc",
            "Công nhân, nông dân, lao động trí thức",
            "Công nhân, nông dân và tiểu tư sản"
        ],
        "answer": 2
    },
    {
        "question": "Câu 95: Thắng lợi nào của Việt Nam đã đánh bại hoàn toàn kế hoạch 'đánh nhanh thắng nhanh' của Pháp, buộc chúng phải chuyển sang đánh lâu dài?",
        "options": [
            "Việt Bắc thu - đông (1947)",
            "Biên giới thu - đông (1950)",
            "Chiến dịch Tây Bắc (1953)",
            "Chiến dịch Tây Nguyên (1954)"
        ],
        "answer": 0
    },
    {
        "question": "Câu 96: Trong kháng chiến chống Pháp, Đảng chủ trương 'vừa đánh vừa bồi dưỡng sức dân, vừa đánh vừa chuyển hóa lực lượng giữa Việt Nam và địch, tận dụng chuyển biến của tình hình thế giới có lợi cho cuộc kháng chiến, giành thắng lợi từng bước'. Điều này chứng tỏ nội dung nào trong đường lối kháng chiến chống Pháp của Đảng Cộng sản Đông Dương?",
        "options": [
            "Toàn dân",
            "Toàn diện",
            "Trường kì",
            "Tự lực cánh sinh"
        ],
        "answer": 3
    },
    {
        "question": "Câu 97: Âm mưu của Pháp trong cuộc tấn công quy mô lên Việt Bắc năm 1947 là gì?",
        "options": [
            "Mở rộng vùng chiếm đóng",
            "Nhanh chóng kết thúc chiến tranh",
            "Giành lại thế chủ động trên chiến trường",
            "Buộc Việt Nam ngồi vào bàn đàm phán Pa-ri"
        ],
        "answer": 1
    },
    {
        "question": "Câu 98: Điều lệ mới của Đảng Lao Động đã xác định Đảng đại diện cho quyền lợi của ai?",
        "options": [
            "Giai cấp công nhân Việt Nam",
            "Nhân dân Việt Nam",
            "Dân tộc Việt Nam",
            "Giai cấp công nhân và nhân dân lao động Việt Nam"
        ],
        "answer": 3
    },
    {
        "question": "Câu 99: Chủ trương của Đảng Cộng sản Đông Dương khi Pháp tấn công lên Việt Bắc năm 1947 là gì?",
        "options": [
            "Tiêu diệt sinh lực địch",
            "Mở rộng căn cứ địa Việt Bắc",
            "Chiến tranh du kích, nhằm tiêu diệt sinh lực địch",
            "Phải phá tan cuộc tấn công mùa đông của Pháp"
        ],
        "answer": 3
    },
    {
        "question": "Câu 100: Nền tảng tư tưởng và kim chỉ nam được Đảng ta xác định tại Đại hội II là gì?",
        "options": [
            "Chủ nghĩa Mác - Lênin",
            "Tư tưởng Hồ Chí Minh",
            "Truyền thống dân tộc",
            "Phật giáo"
        ],
        "answer": 2
    }
    
];



let currentQuestionIndex = 0;

// Hiển thị câu hỏi
function showQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = ""; // Xóa nội dung cũ

    const questionData = questions[currentQuestionIndex];
    const questionTitle = document.createElement("h2");
    questionTitle.textContent = questionData.question;

    quizContainer.appendChild(questionTitle);

    questionData.options.forEach((option, index) => {
        const optionButton = document.createElement("div");
        optionButton.classList.add("option");
        optionButton.textContent = option;

        // Gắn sự kiện click cho mỗi lựa chọn
        optionButton.addEventListener("click", () => handleAnswer(index));
        quizContainer.appendChild(optionButton);
    });
}

// Xử lý chọn đáp án
function handleAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    const options = document.querySelectorAll(".option");

    // Kiểm tra đúng hay sai
    options.forEach((option, index) => {
        if (index === questionData.answer) {
            option.classList.add("correct"); // Đáp án đúng
        }
        if (index === selectedIndex && index !== questionData.answer) {
            option.classList.add("incorrect"); // Đáp án sai
        }
        option.style.pointerEvents = "none"; // Vô hiệu hóa các lựa chọn
    });

    // Hiển thị nút "Câu tiếp theo"
    document.getElementById("next-btn").style.display = "block";
}

// Chuyển đến câu hỏi tiếp theo
document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Hiển thị câu hỏi tiếp theo
        document.getElementById("next-btn").style.display = "none"; // Ẩn nút
    } else {
        // Kết thúc bài trắc nghiệm
        const quizContainer = document.getElementById("quiz-container");
        quizContainer.innerHTML = `<h2>Bạn đã hoàn thành bài trắc nghiệm!</h2>`;
        document.getElementById("next-btn").style.display = "none";
    }
});

// Bắt đầu bài trắc nghiệm
showQuestion();