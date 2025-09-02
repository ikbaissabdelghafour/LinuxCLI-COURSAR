const commands = [
    // File Management
    {id:'ls', name:'ls', desc:'عرض الملفات والمجلدات', url:'filescli.html#ls'},
    {id:'ls-l', name:'ls -l', desc:'عرض الملفات بالتفاصيل', url:'filescli.html#ls-l'},
    {id:'ls-a', name:'ls -a', desc:'عرض جميع الملفات حتى المخفية', url:'filescli.html#ls-a'},
    {id:'cd', name:'cd', desc:'التنقل بين المجلدات', url:'filescli.html#cd'},
    {id:'pwd', name:'pwd', desc:'عرض المسار الحالي', url:'filescli.html#pwd'},
    {id:'mkdir', name:'mkdir', desc:'إنشاء مجلد جديد', url:'filescli.html#mkdir'},
    {id:'rmdir', name:'rmdir', desc:'حذف مجلد فارغ', url:'filescli.html#rmdir'},
    {id:'touch', name:'touch', desc:'إنشاء ملف فارغ أو تحديث تاريخ الملف', url:'filescli.html#touch'},
    {id:'cp', name:'cp', desc:'نسخ الملفات والمجلدات', url:'filescli.html#cp'},
    {id:'mv', name:'mv', desc:'نقل أو إعادة تسمية الملفات والمجلدات', url:'filescli.html#mv'},
    {id:'rm', name:'rm', desc:'حذف الملفات والمجلدات', url:'filescli.html#rm'},
    {id:'find', name:'find', desc:'البحث عن الملفات والمجلدات', url:'filescli.html#find'},
    {id:'locate', name:'locate', desc:'البحث السريع باستعمال قاعدة البيانات', url:'filescli.html#locate'},
    // File Viewing & Editing
    {id:'cat', name:'cat', desc:'عرض محتوى الملفات بالكامل', url:'filescli.html#cat'},
    {id:'more', name:'more', desc:'عرض المحتوى تدريجياً صفحة بصفحة', url:'filescli.html#more'},
    {id:'less', name:'less', desc:'عرض المحتوى مع إمكانية البحث والتنقل', url:'filescli.html#less'},
    {id:'head', name:'head', desc:'عرض الأسطر الأولى من الملف', url:'filescli.html#head'},
    {id:'tail', name:'tail', desc:'عرض الأسطر الأخيرة من الملف', url:'filescli.html#tail'},
    {id:'nano', name:'nano', desc:'محرر نصوص بسيط وسهل الاستخدام', url:'filescli.html#nano'},
    {id:'vim', name:'vim', desc:'محرر نصوص قوي ومتقدم', url:'filescli.html#vim'},
    {id:'vi', name:'vi', desc:'محرر النصوص التقليدي', url:'filescli.html#vi'},
    // Archiving & Compression
    {id:'tar', name:'tar', desc:'أرشفة وضغط الملفات والمجلدات', url:'archivecli.html#tar'},
    {id:'gzip', name:'gzip', desc:'ضغط الملفات بصيغة gzip', url:'archivecli.html#gzip'},
    {id:'gunzip', name:'gunzip', desc:'فك ضغط الملفات بصيغة gzip', url:'archivecli.html#gunzip'},
    {id:'zip', name:'zip', desc:'ضغط الملفات والمجلدات بصيغة zip', url:'archivecli.html#zip'},
    {id:'unzip', name:'unzip', desc:'فك ضغط الملفات بصيغة zip', url:'archivecli.html#unzip'},
    // Packages
    {id:'apt', name:'apt-get / apt', desc:'إدارة الحزم في Debian وUbuntu', url:'packagecli.html#apt'},
    {id:'yum', name:'yum / dnf', desc:'إدارة الحزم في Red Hat وFedora', url:'packagecli.html#yum'},
    {id:'pacman', name:'pacman', desc:'إدارة الحزم في Arch Linux', url:'packagecli.html#pacman'},
    // System & Processes
    {id:'ps', name:'ps', desc:'عرض العمليات الجارية', url:'systemcli.html#ps'},
    {id:'top', name:'top', desc:'عرض العمليات الجارية واستخدام الموارد', url:'systemcli.html#top'},
    {id:'htop', name:'htop', desc:'عرض العمليات بشكل تفاعلي', url:'systemcli.html#htop'},
    {id:'kill', name:'kill', desc:'إنهاء عملية بواسطة PID', url:'systemcli.html#kill'},
    {id:'killall', name:'killall', desc:'إنهاء جميع العمليات باسم معين', url:'systemcli.html#killall'},
    {id:'uptime', name:'uptime', desc:'عرض مدة تشغيل النظام', url:'systemcli.html#uptime'},
    {id:'uname', name:'uname -a', desc:'عرض معلومات النظام والنواة', url:'systemcli.html#uname'},
    {id:'df', name:'df', desc:'عرض مساحة القرص', url:'systemcli.html#df'},
    {id:'du', name:'du', desc:'عرض مساحة القرص المستخدمة', url:'systemcli.html#du'},
    {id:'free', name:'free', desc:'عرض الذاكرة المستخدمة والمتاحة', url:'systemcli.html#free'},
    // Network
    {id:'ping', name:'ping', desc:'اختبار الاتصال بشبكة', url:'networkcli.html#ping'},
    {id:'curl', name:'curl', desc:'إرسال واستقبال البيانات عبر الشبكة', url:'networkcli.html#curl'},
    {id:'wget', name:'wget', desc:'تحميل الملفات من الإنترنت', url:'networkcli.html#wget'},
    {id:'ifconfig', name:'ifconfig', desc:'عرض إعدادات الشبكة', url:'networkcli.html#ifconfig'},
    {id:'ipaddr', name:'ip addr', desc:'عرض معلومات واجهات الشبكة', url:'networkcli.html#ipaddr'},
    {id:'netstat', name:'netstat', desc:'عرض اتصالات الشبكة', url:'networkcli.html#netstat'},
    {id:'ssh', name:'ssh', desc:'الاتصال بخادم عبر SSH', url:'networkcli.html#ssh'},
    {id:'scp', name:'scp', desc:'نسخ الملفات بين الأجهزة عبر الشبكة', url:'networkcli.html#scp'},
    // Other
    {id:'history', name:'history', desc:'عرض سجل الأوامر', url:'othercli.html#history'},
    {id:'clear', name:'clear', desc:'مسح شاشة الطرفية', url:'othercli.html#clear'},
    {id:'alias', name:'alias', desc:'إنشاء أسماء مستعارة للأوامر', url:'othercli.html#alias'},
    {id:'man', name:'man', desc:'عرض دليل المساعدة للأوامر', url:'othercli.html#man'},
    {id:'info', name:'info', desc:'عرض معلومات مفصلة عن الأوامر', url:'othercli.html#info'},
    // Text Processing
    {id:'echo', name:'echo', desc:'طباعة النص على الشاشة', url:'textcli.html#echo'},
    {id:'wc', name:'wc', desc:'عدد الكلمات والأسطر والحروف', url:'textcli.html#wc'},
    {id:'cut', name:'cut', desc:'قص أعمدة أو حقول من النص', url:'textcli.html#cut'},
    {id:'sort', name:'sort', desc:'ترتيب الأسطر', url:'textcli.html#sort'},
    {id:'uniq', name:'uniq', desc:'إزالة الأسطر المتكررة', url:'textcli.html#uniq'},
    {id:'grep', name:'grep', desc:'البحث عن نص في الملفات', url:'textcli.html#grep'},
    {id:'awk', name:'awk', desc:'معالجة متقدمة للنصوص', url:'textcli.html#awk'},
    {id:'sed', name:'sed', desc:'تعديل النصوص', url:'textcli.html#sed'},
    {id:'tr', name:'tr', desc:'تحويل الأحرف', url:'textcli.html#tr'},
    // Permissions & Ownership
    {id:'chmod', name:'chmod', desc:'تغيير صلاحيات الملفات', url:'permissionscli.html#chmod'},
    {id:'chown', name:'chown', desc:'تغيير ملكية الملفات والمجلدات', url:'permissionscli.html#chown'},
    {id:'chgrp', name:'chgrp', desc:'تغيير المجموعة المالكة', url:'permissionscli.html#chgrp'},
    {id:'umask', name:'umask', desc:'تعيين صلاحيات الملفات الافتراضية', url:'permissionscli.html#umask'},
    // User Management
    {id:'whoami', name:'whoami', desc:'عرض اسم المستخدم الحالي', url:'userscli.html#whoami'},
    {id:'who', name:'who', desc:'عرض المستخدمين المتصلين بالنظام', url:'userscli.html#who'},
    {id:'id', name:'id', desc:'عرض هوية المستخدم والمجموعات', url:'userscli.html#id'},
    {id:'adduser', name:'adduser', desc:'إضافة مستخدم جديد للنظام', url:'userscli.html#adduser'},
    {id:'passwd', name:'passwd', desc:'تغيير كلمة مرور المستخدم', url:'userscli.html#passwd'},
    {id:'su', name:'su', desc:'تغيير المستخدم الحالي', url:'userscli.html#su'},
    {id:'sudo', name:'sudo', desc:'تنفيذ أوامر بصلاحيات المدير', url:'userscli.html#sudo'}
];


    function filterCommands() {
        const input = document.getElementById('command-search').value.trim().toLowerCase();
        const resultsDiv = document.getElementById('search-results');
        if (!input) {
            resultsDiv.style.display = 'none';
            resultsDiv.innerHTML = '';
            return;
        }
        const filtered = commands.filter(cmd =>
            cmd.name.toLowerCase().includes(input) ||
            (cmd.desc && cmd.desc.toLowerCase().includes(input))
        );
        if (filtered.length === 0) {
            resultsDiv.innerHTML = '<div style="padding:12px;color:#888;">لا يوجد نتائج</div>';
            resultsDiv.style.display = 'block';
            return;
        }
        
        // Limit displayed results if needed
        const maxResults = 50; // Adjust this number as needed
        const displayedResults = filtered.slice(0, maxResults);
        
        resultsDiv.innerHTML = displayedResults.map(cmd => `
        <div 
            style="
                padding: 12px 20px;
                cursor: pointer;
                border-bottom: 1px solid #f0f0f0;
                text-align: right;
                transition: all 0.2s ease;
                background: #fff;
            "
            onmouseover="this.style.background='#fafbff'"
            onmouseout="this.style.background='#fff'"
            onclick="window.location.href='${cmd.url}'"
        >
            <span style="font-weight:600;color:#4f46e5;font-size:1.1em">${cmd.name}</span>
            <span style="color:#6b7280;font-size:0.95em;margin-right:10px;display:inline-block">${cmd.desc}</span>
        </div>
    `).join('');
    
    if (filtered.length > maxResults) {
        resultsDiv.innerHTML += `
            <div style="
                padding: 12px 20px;
                color: #6b7280;
                text-align: center;
                font-size: 0.9em;
                background: #fafbff;
                border-bottom-left-radius: 12px;
                border-bottom-right-radius: 12px;
            ">
                عرض ${maxResults} من ${filtered.length} نتيجة
            </div>
        `;
    }
        
        resultsDiv.style.display = 'block';
    }

    // Hide results when clicking outside
    document.addEventListener('click', function(e) {
        const search = document.getElementById('command-search');
        const results = document.getElementById('search-results');
        if (!search.contains(e.target) && !results.contains(e.target)) {
            results.style.display = 'none';
        }
    });