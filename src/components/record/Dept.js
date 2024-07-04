import "./record.css";

export default function Dept(){
    return(
        <div class="main_body">
            <div class="record_dept_wrapper">
                <div class="title">
                    <span>이전 달 근무 통계</span>
                </div>
                    <ul class="record_box_wrapper">
                    <li class="record_data w_bg">
                        <img class="record_icon" th:src="@{/img/record/timer.png}"/>
                        <div class="record_text_wrapper">
                            <p class="record_text_title">월 평균 근무 시간</p>
                            <p class="record_text_content" th:text="${record.workAvgTime}"></p>
                        </div>
                    </li>
                    <li class="record_data w_bg">
                        <img class="record_icon" th:src="@{/img/record/timer.png}"/>
                        <div class="record_text_wrapper">
                            <p class="record_text_title">평균 잔업 시간</p>
                            <p class="record_text_content" th:text="${record.overAvgTime}"></p>
                        </div>
                    </li>
                    <li class="record_data w_bg">
                        <img class="record_icon" th:src="@{/img/record/timer.png}"/>
                        <div class="record_text_wrapper">
                            <p class="record_text_title">지각자</p>
                            <span th:each="m:${record.latemem}">
                                <p class="record_text_content" th:text="${m}"></p>
                            </span>
                        </div>
                    </li>
                    <li class="record_data w_bg">
                        <img class="record_icon" th:src="@{/img/record/timer.png}"/>
                        <div class="record_text_wrapper">
                            <p class="record_text_title">지각 주의자</p>
                            <span th:each="m:${record.danmem}">
                                <p class="record_text_content" th:text="${m}"></p>
                            </span>
                        </div>
                    </li>
                </ul>        
            </div>
            <div class="record_table w_bg">
                    <div class="record_table_title">
                        <p>부서원 상세 근무기록</p>
                        <div class="record_month font_b24">
                            <div id="record_left" class="arrow left_arrow cursor" onclick="deptrecord(-1)"></div>
                            <span class="month">2022.07</span>
                            <div id="record_right" class="arrow right_arrow arrow_off" onclick="deptrecord(+1)"></div>
                        </div>
                    </div>
                    <div class="record_table_wrapper">
                        <table class="record_rtable">
                            <thead>
                                <td>이름</td>
                                <td>부서</td>
                                <td>직급</td>
                                <td>근무일</td>
                                <td>지각 횟수</td>
                                <td>총 근무시간</td>
                                <td>잔업 시간</td>
                            </thead>
                            <tbody class="record_list dept_record_list">
                                <tr th:each="s:${list}">
                                    <td th:text="${s.name}">목</td>
                                    <td th:text="${s.deptNum}">09:00</td>
                                    <td th:text="${s.joblv}">조기퇴근</td>
                                    <td th:text="${s.totalRecords}">조기퇴근</td>
                                    <td th:text="${s.lateCount}">조기퇴근</td>
                                    <td th:text="${s.workTime}">조기퇴근</td>
                                    <td th:text="${s.overWork}">조기퇴근</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>

    )
}