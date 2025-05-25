# Tahsin App

---

## 📦 Mapping Model → Feature Folder

Berikut hasil pemetaan `model-model Prisma` ke dalam `features`:

---

### 📁 `features/auth/`

> Untuk login, register, token, dan autentikasi dasar
>

**Model:**

- `User` (juga dipakai di features lain, tapi login fokus di sini)

---

### 📁 `features/users/`

> Manajemen akun & profil: Admin, Teacher, Student
>

**Model:**

- `Admin`
- `Teacher`
- `Student`
- `User` (shared, relasi dengan ketiganya)

---

### 📁 `features/registration/`

> Pendaftaran awal dan pengelompokan kelas
>

**Model:**

- `Enrollment`
- `Student` (relasi saat registrasi)
- `Class`

---

### 📁 `features/courses/`

> Pengelolaan kelas, modul, komponen, pengajar kelas
>

**Model:**

- `Class`
- `Module`
- `Component`
- `Teacher` (relasi ke Module & Task)

---

### 📁 `features/scheduling/`

> Penjadwalan kelas dan pertemuan
>

**Model:**

- `Schedule`
- `Day`
- `Time`

---

### 📁 `features/teaching/`

> Kegiatan harian seperti tugas dan presensi
>

**Model:**

- `Task`
- `Attendance`
- `AttendanceStatus` (enum)

---

### 📁 `features/evaluation/`

> Penilaian dan nilai akhir
>

**Model:**

- `Score`
- `StudentStatus`

---

### 📁 `features/payment/`

> Tagihan, transaksi, akun bank
>

**Model:**

- `Bill`
- `Transaction`
- `TransactionType`
- `TransactionStatus`
- `BankAccount`
- `ClassPrice`

---

### 📁 `features/leveling/` *(atau `features/master-data/` jika mau lebih umum)*

> Master data seperti level dan batch
>

**Model:**

- `Level`
- `Batch`

---

### 📁 `features/announcement/`

> Pengumuman & event (belum muncul di schema, tapi ada di fitur)
>

---

### 📁 `features/reporting/`

> Laporan & dashboard
>

**Model:**

- Tidak spesifik, tapi akan banyak akses agregasi dari `Score`, `Attendance`, `Transaction`, dsb.

---

## 🗂 Contoh Struktur dalam 1 Feature (`features/courses/`)

```
features/
└── courses/
    ├── domain/
    │   ├── entities/
    │   │   ├── class.entity.ts
    │   │   ├── module.entity.ts
    │   │   └── component.entity.ts
    │   ├── services/
    │   │   └── course.service.ts
    │   └── ports/
    │       ├── course-repository.port.ts
    │       └── module-factory.port.ts
    ├── application/
    │   └── use-cases/
    │       ├── create-class.use-case.ts
    │       ├── add-module.use-case.ts
    │       └── assign-teacher.use-case.ts
    ├── infrastructure/
    │   └── persistence/
    │       ├── prisma-class.repository.ts
    │       └── prisma-module.repository.ts
    └── presentation/
        └── rest/
            ├── course.controller.ts
            └── dto/
                └── create-class.dto.ts

```

---

## 🔁 Shared Folder `common/`

Untuk menyimpan:

- `@Prisma()` service (global Prisma)
- `BaseEntity`, `BaseService`, `BaseController` (opsional)
- Guard / Middleware / Interceptor
- Mapping helper: snake_case → camelCase
- Shared enums (misal `AttendanceStatus` bisa dideklarasikan ulang di domain)

---